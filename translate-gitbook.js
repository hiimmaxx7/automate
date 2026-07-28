#!/usr/bin/env node
/**
 * translate-gitbook.js
 * ---------------------------------------------------------
 * Dịch hàng loạt file Markdown (.md / .mdx) trong 1 repo GitBook,
 * giữ nguyên cú pháp Markdown, và (tuỳ chọn) dịch luôn tên thư mục
 * + tên file sang tiếng Anh dạng slug, tự sửa lại link nội bộ.
 *
 * Hỗ trợ 3 nhà cung cấp AI: Gemini, OpenAI (ChatGPT), hoặc OpenRouter.
 *
 * CÀI ĐẶT (Node.js >= 18, không cần cài thêm package):
 *
 *   Cách 1 - dùng file .env cùng thư mục với script:
 *     PROVIDER=gemini
 *     GEMINI_API_KEY=AIza...hoặc AQ....
 *     # hoặc
 *     PROVIDER=openai
 *     OPENAI_API_KEY=sk-...
 *     # hoặc
 *     PROVIDER=openrouter
 *     OPENROUTER_API_KEY=sk-or-v1-...
 *     OPENROUTER_MODEL=anthropic/claude-3.5-sonnet
 *
 *   Cách 2 - set biến môi trường trực tiếp (cmd):
 *     set PROVIDER=openrouter
 *     set OPENROUTER_API_KEY=sk-or-v1-...
 *
 * CHẠY:
 *   node translate-gitbook.js <thư_mục_nguồn> <thư_mục_đích> <ngôn_ngữ_đích> [--rename]
 *
 *   --rename : bật tính năng dịch tên thư mục/file sang tiếng Anh (slug)
 *              và tự sửa link nội bộ. Không truyền thì giữ nguyên tên gốc.
 *
 * Ví dụ:
 *   node translate-gitbook.js ./automate-en ./translated en --rename
 * ---------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

// ---- Tự đọc file .env (nếu có), không cần cài package ----
function loadDotEnv(envPath = path.resolve(process.cwd(), '.env')) {
  if (!fs.existsSync(envPath)) return;
  let raw = fs.readFileSync(envPath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1); // bỏ BOM nếu có
  const lines = raw.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadDotEnv();

// ============ CONFIG ============
const PROVIDER = (process.env.PROVIDER || 'gemini').toLowerCase(); // 'gemini' | 'openai' | 'openrouter'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
const OPENROUTER_SITE_URL = process.env.OPENROUTER_SITE_URL || '';
const OPENROUTER_SITE_NAME = process.env.OPENROUTER_SITE_NAME || '';

const CONCURRENCY = 3;
const RETRY_LIMIT = 3;
const RETRY_DELAY_MS = 4000;
const SKIP_DIRS = new Set(['node_modules', '.git', '.github', 'dist', 'build']);
const EXTENSIONS = new Set(['.md', '.mdx']);
// =================================

const argv = process.argv.slice(2);
const RENAME = argv.includes('--rename');
const positional = argv.filter(a => !a.startsWith('--'));
const [srcDirArg, outDirArg, targetLangArg] = positional;

if (!srcDirArg || !outDirArg || !targetLangArg) {
  console.error('Cách dùng: node translate-gitbook.js <thư_mục_nguồn> <thư_mục_đích> <ngôn_ngữ_đích> [--rename]');
  console.error('Ví dụ:    node translate-gitbook.js ./gitbook-repo ./translated vi --rename');
  process.exit(1);
}

if (PROVIDER !== 'gemini' && PROVIDER !== 'openai' && PROVIDER !== 'openrouter') {
  console.error(`PROVIDER không hợp lệ: "${PROVIDER}". Chỉ nhận "gemini", "openai" hoặc "openrouter".`);
  process.exit(1);
}
if (PROVIDER === 'gemini' && !GEMINI_API_KEY) {
  console.error('Thiếu GEMINI_API_KEY.');
  process.exit(1);
}
if (PROVIDER === 'openai' && !OPENAI_API_KEY) {
  console.error('Thiếu OPENAI_API_KEY.');
  process.exit(1);
}
if (PROVIDER === 'openrouter' && !OPENROUTER_API_KEY) {
  console.error('Thiếu OPENROUTER_API_KEY.');
  process.exit(1);
}

const SRC_DIR = path.resolve(srcDirArg);
const OUT_DIR = path.resolve(outDirArg);

const LANG_CODE_MAP = {
  vi: 'Vietnamese', en: 'English', zh: 'Chinese (Simplified)', 'zh-cn': 'Chinese (Simplified)',
  'zh-tw': 'Chinese (Traditional)', ja: 'Japanese', ko: 'Korean', fr: 'French', de: 'German',
  es: 'Spanish', pt: 'Portuguese', ru: 'Russian', th: 'Thai', id: 'Indonesian'
};
const TARGET_LANG = LANG_CODE_MAP[targetLangArg.toLowerCase()] || targetLangArg;
if (LANG_CODE_MAP[targetLangArg.toLowerCase()]) {
  console.log(`(Mã ngôn ngữ "${targetLangArg}" được hiểu là "${TARGET_LANG}")`);
}

// ============ Gọi API (3 provider) ============

async function callGemini(prompt, attempt = 1) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2 }
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt <= RETRY_LIMIT) {
      console.warn(`  ⚠ Gemini lỗi ${res.status}, thử lại lần ${attempt}...`);
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS * attempt));
      return callGemini(prompt, attempt + 1);
    }
    throw new Error(`Gemini API lỗi ${res.status}: ${errText}`);
  }

  const data = await res.json();
  const candidate = data.candidates && data.candidates[0];
  const text = candidate && candidate.content && candidate.content.parts
    ? candidate.content.parts.map(p => p.text || '').join('')
    : null;
  if (!text) throw new Error('Gemini không trả về nội dung (có thể bị safety filter chặn).');
  return text.trim();
}

async function callOpenAI(prompt, attempt = 1) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt <= RETRY_LIMIT) {
      console.warn(`  ⚠ OpenAI lỗi ${res.status}, thử lại lần ${attempt}...`);
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS * attempt));
      return callOpenAI(prompt, attempt + 1);
    }
    throw new Error(`OpenAI API lỗi ${res.status}: ${errText}`);
  }

  const data = await res.json();
  const text = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!text) throw new Error('OpenAI không trả về nội dung.');
  return text.trim();
}

async function callOpenRouter(prompt, attempt = 1) {
  const url = 'https://openrouter.ai/api/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENROUTER_API_KEY}`
  };
  if (OPENROUTER_SITE_URL) headers['HTTP-Referer'] = OPENROUTER_SITE_URL;
  if (OPENROUTER_SITE_NAME) headers['X-Title'] = OPENROUTER_SITE_NAME;

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt <= RETRY_LIMIT) {
      console.warn(`  ⚠ OpenRouter lỗi ${res.status}, thử lại lần ${attempt}...`);
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS * attempt));
      return callOpenRouter(prompt, attempt + 1);
    }
    throw new Error(`OpenRouter API lỗi ${res.status}: ${errText}`);
  }

  const data = await res.json();
  const text = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!text) throw new Error('OpenRouter không trả về nội dung.');
  return text.trim();
}

async function callLLM(prompt) {
  if (PROVIDER === 'openai') return callOpenAI(prompt);
  if (PROVIDER === 'openrouter') return callOpenRouter(prompt);
  return callGemini(prompt);
}

// ============ Dịch nội dung file ============

// ============ Glossary: thuật ngữ/tên riêng giữ nguyên tiếng Anh ============

function loadGlossary(glossaryPath = path.resolve(process.cwd(), 'glossary.txt')) {
  if (!fs.existsSync(glossaryPath)) return [];
  const raw = fs.readFileSync(glossaryPath, 'utf8');
  return raw.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));
}

const GLOSSARY = loadGlossary();

function buildContentPrompt(content, targetLang) {
  const glossarySection = GLOSSARY.length > 0
    ? `\n\nTHUẬT NGỮ/TÊN RIÊNG PHẢI GIỮ NGUYÊN TIẾNG ANH (đây là tên action, tính năng, thuật ngữ chính thức của phần mềm GPM Automate, KHÔNG được dịch sang ngôn ngữ đích dù xuất hiện ở đâu - heading, sidebar, đoạn văn...):\n${GLOSSARY.map(g => `- "${g}"`).join('\n')}\n`
    : '';

  return `Bạn là một công cụ dịch thuật chuyên nghiệp cho tài liệu kỹ thuật dạng Markdown/GitBook.

NHIỆM VỤ: Dịch nội dung Markdown dưới đây sang ngôn ngữ: ${targetLang}.

QUY TẮC BẮT BUỘC:
1. CHỈ dịch phần văn bản (prose), giữ nguyên 100% cú pháp Markdown: heading (#, ##...), danh sách (-, *, 1.), bảng (giữ nguyên số cột và dấu |---|), blockquote (>), in đậm/nghiêng (**, *), liên kết [text](url) — CHỈ dịch phần text hiển thị, giữ nguyên url.
2. KHÔNG dịch nội dung bên trong code block (\`\`\`...\`\`\`) và inline code (\`code\`).
3. KHÔNG dịch tên biến, tên hàm, tên file, đường dẫn, URL, thẻ HTML, thuộc tính (attribute) của thẻ.
4. Nếu có frontmatter YAML ở đầu file (giữa hai dòng ---), chỉ dịch giá trị của các trường mang tính hiển thị như title, description; giữ nguyên tên trường (key) và các trường cấu hình khác (layout, icon, path...).
5. Giữ nguyên số lượng dòng trống, thụt lề, và cấu trúc tổng thể của tài liệu.
6. KHÔNG thêm giải thích, KHÔNG thêm markdown code fence bao quanh toàn bộ kết quả. Chỉ trả về đúng nội dung Markdown đã dịch.${glossarySection}
NỘI DUNG CẦN DỊCH:
---START---
${content}
---END---

Trả về CHÍNH XÁC nội dung đã dịch, không kèm ---START---/---END---, không kèm lời dẫn.`;
}

async function translateContent(content, targetLang) {
  return callLLM(buildContentPrompt(content, targetLang));
}

// ============ Dịch tên thư mục / file thành slug tiếng Anh ============

function localSlugify(name) {
  const slug = name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'untitled';
}

const crypto = require('crypto');

const SLUG_CACHE_PATH = path.resolve(process.cwd(), 'slug-cache.json');
const HASH_MANIFEST_PATH = path.resolve(process.cwd(), 'translate-manifest.json');

function loadJsonMap(filePath) {
  if (!fs.existsSync(filePath)) return new Map();
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return new Map(Object.entries(raw));
  } catch {
    return new Map();
  }
}

function saveJsonMap(filePath, map) {
  fs.writeFileSync(filePath, JSON.stringify(Object.fromEntries(map), null, 2), 'utf8');
}

function loadSlugCache() {
  return loadJsonMap(SLUG_CACHE_PATH);
}

function saveSlugCache(cache) {
  saveJsonMap(SLUG_CACHE_PATH, cache);
}

function hashContent(str) {
  const normalized = str.replace(/\r\n/g, '\n');
  return crypto.createHash('sha256').update(normalized, 'utf8').digest('hex');
}

const HASH_MANIFEST = loadJsonMap(HASH_MANIFEST_PATH);

const nameCache = loadSlugCache();

// Các tên file GitBook bắt buộc giữ nguyên case viết hoa (README.md, SUMMARY.md).
// Nếu bị dịch/slugify thành chữ thường, GitBook Git Sync sẽ không nhận diện được
// đây là file điều hướng đặc biệt của Space (menu sẽ rơi về liệt kê phẳng theo alphabet).
const RESERVED_FILENAMES = new Set(['README', 'SUMMARY']);

async function translateName(originalName, kind) {
  const cacheKey = `${kind}:${originalName}`;
  if (nameCache.has(cacheKey)) return nameCache.get(cacheKey);

  const prompt = `You are converting a Vietnamese ${kind} name (used as a file/folder path segment) into an English kebab-case slug.

IMPORTANT: The original name is very likely Vietnamese WITHOUT diacritics (dấu) — this is common in file/folder names. You must mentally restore the diacritics and understand the real Vietnamese meaning first, THEN translate that meaning into English. Do NOT just clean up the string or transliterate it letter by letter.

CRITICAL RULE: The output MUST ALWAYS be in ENGLISH, using standard English words only — regardless of what language the surrounding document is being translated into (even if the document content is being translated to Chinese, Japanese, etc., the slug is STILL English). NEVER output Pinyin, romanized Chinese, or any transliteration into another language's romanization system. This is a path/URL segment, not translated content.

Examples:
- "huong-dan" means "hướng dẫn" (guide/instructions) → translate meaning, e.g. "guide"
- "huong-dan-cac-action" means "hướng dẫn các action" (guide to actions) → e.g. "action-guide"
- "cac-block" means "các block" (the blocks) → e.g. "blocks"
- "gioi-thieu-chung" means "giới thiệu chung" (general introduction) → e.g. "introduction"
- "huong-dan-viet-dieu-kien" means "hướng dẫn viết điều kiện" (guide to writing conditions) → e.g. "writing-conditions"
- "if-else-if-va-else" means "if - else if - và else" (if / else if / and else, a programming term) → e.g. "if-else-if-and-else"
- "thao-tac" or "cac-thao-tac" means "thao tác" / "các thao tác" (operations/actions) → e.g. "user-guide" or "actions" (English, NEVER "cao-zuo" or any Pinyin)

Now convert this one. Output ONLY the final ENGLISH kebab-case slug (lowercase letters, digits, hyphens only, no accents, no spaces, no punctuation, no quotes, no explanation, single line):

Original name: "${originalName}"`;

  let slug;
  try {
    const raw = await callLLM(prompt);
    slug = raw.trim().split('\n')[0].trim().replace(/[`"']/g, '');
    slug = slug.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    if (!slug) throw new Error('slug rỗng');
  } catch (err) {
    console.warn(`  ⚠ Không dịch được tên "${originalName}" (${err.message}), dùng slugify cục bộ.`);
    slug = localSlugify(originalName);
  }
  nameCache.set(cacheKey, slug);
  return slug;
}

async function computeNewRelPath(relPathPosix) {
  const parts = relPathPosix.split('/');
  const newParts = [];
  for (let i = 0; i < parts.length; i++) {
    const isLast = i === parts.length - 1;
    if (isLast) {
      const ext = path.extname(parts[i]);
      const base = path.basename(parts[i], ext);
      if (RESERVED_FILENAMES.has(base.toUpperCase())) {
        newParts.push(base.toUpperCase() + ext);
        continue;
      }
      const slug = await translateName(base, 'file');
      newParts.push(slug + ext);
    } else {
      const slug = await translateName(parts[i], 'folder');
      newParts.push(slug);
    }
  }
  return newParts.join('/');
}

// ============ Sửa link nội bộ trỏ tới file .md khác sau khi đổi tên ============

function fixInternalLinks(content, oldRelPosix, mapping) {
  const oldDir = path.posix.dirname(oldRelPosix);
  const newRelPosix = mapping.get(oldRelPosix);
  const newDir = path.posix.dirname(newRelPosix);

  return content.replace(/\]\(([^)]+)\)/g, (match, target) => {
    let [urlPart, hash] = target.split('#');
    hash = hash ? '#' + hash : '';
    if (!urlPart) return match;
    if (/^([a-z]+:)?\/\//i.test(urlPart) || urlPart.startsWith('mailto:')) return match; // link ngoài
    if (!/\.(md|mdx)$/i.test(urlPart)) return match; // chỉ sửa link trỏ .md/.mdx

    const resolvedOld = path.posix.normalize(path.posix.join(oldDir, urlPart));
    const mappedNew = mapping.get(resolvedOld);
    if (!mappedNew) return match; // không nằm trong danh sách đã dịch, giữ nguyên

    let relNew = path.posix.relative(newDir, mappedNew);
    if (!relNew.startsWith('.')) relNew = './' + relNew;
    return `](${relNew}${hash})`;
  });
}

// ============ Duyệt file ============

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      results.push(...walk(path.join(dir, entry.name)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

// Duyệt TẤT CẢ file (kể cả không phải .md/.mdx) - dùng để copy ảnh/asset
function walkAll(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      results.push(...walkAll(path.join(dir, entry.name)));
    } else {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

// Copy nguyên vẹn các file không phải markdown (ảnh, pdf, v.v.) sang thư mục đích,
// giữ nguyên đường dẫn gốc (không dịch tên, vì các link trong nội dung đã dịch
// vẫn trỏ theo đường dẫn gốc của các file này).
function copyNonMarkdownAssets() {
  const allFiles = walkAll(SRC_DIR);
  let copied = 0;
  for (const filePath of allFiles) {
    const ext = path.extname(filePath).toLowerCase();
    if (EXTENSIONS.has(ext)) continue; // file .md/.mdx đã xử lý ở luồng riêng
    const relPosix = toPosix(path.relative(SRC_DIR, filePath));
    const outPath = path.join(OUT_DIR, ...relPosix.split('/'));
    if (fs.existsSync(outPath) && process.env.FORCE !== '1') continue;
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.copyFileSync(filePath, outPath);
    copied++;
  }
  console.log(`Đã copy ${copied} file không phải markdown (ảnh, assets...).`);
}

function toPosix(relPath) {
  return relPath.split(path.sep).join('/');
}

// ============ Xử lý từng file ============

async function processFile(filePath, index, total, mapping) {
  const relPathPosix = toPosix(path.relative(SRC_DIR, filePath));
  const newRelPosix = mapping.get(relPathPosix) || relPathPosix;
  const outPath = path.join(OUT_DIR, ...newRelPosix.split('/'));
  const label = `[${index + 1}/${total}] ${relPathPosix}${RENAME ? ' → ' + newRelPosix : ''}`;

  const original = fs.readFileSync(filePath, 'utf8');
  const currentHash = hashContent(original);
  const manifestKey = relPathPosix;
  const previousHash = HASH_MANIFEST.get(manifestKey);
  const outExists = fs.existsSync(outPath) && fs.statSync(outPath).size > 0;

  if (process.env.FORCE !== '1' && outExists && previousHash === currentHash) {
    console.log(`${label} → nội dung không đổi, bỏ qua (đặt FORCE=1 để dịch lại)`);
    return;
  }

  try {
    if (!original.trim()) {
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, original, 'utf8');
      HASH_MANIFEST.set(manifestKey, currentHash);
      console.log(`${label} → rỗng, copy nguyên bản`);
      return;
    }

    let translated = await translateContent(original, TARGET_LANG);
    if (RENAME) {
      translated = fixInternalLinks(translated, relPathPosix, mapping);
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, translated, 'utf8');
    HASH_MANIFEST.set(manifestKey, currentHash);
    console.log(`${label} ✔ ${outExists ? 'đã cập nhật (nội dung thay đổi)' : 'xong'}`);
  } catch (err) {
    console.error(`${label} ✘ LỖI: ${err.message}`);
  }
}

async function runPool(files, mapping) {
  let cursor = 0;
  const total = files.length;
  async function worker() {
    while (cursor < total) {
      const i = cursor++;
      await processFile(files[i], i, total, mapping);
    }
  }
  const workers = Array.from({ length: Math.min(CONCURRENCY, total) }, worker);
  await Promise.all(workers);
}

// ============ Kiểm tra key trước khi chạy ============

function maskKey(key) {
  if (!key) return '(không có)';
  if (key.length <= 8) return '***';
  return key.slice(0, 6) + '...' + key.slice(-4) + `  (dài ${key.length} ký tự)`;
}

async function checkApiKey() {
  const key = PROVIDER === 'openai' ? OPENAI_API_KEY : (PROVIDER === 'openrouter' ? OPENROUTER_API_KEY : GEMINI_API_KEY);
  console.log(`Provider: ${PROVIDER}`);
  console.log(`Key đọc được: ${maskKey(key)}`);
  console.log(`Glossary: ${GLOSSARY.length > 0 ? `${GLOSSARY.length} thuật ngữ (từ glossary.txt)` : '(không có glossary.txt, bỏ qua)'}`);
  console.log('Đang kiểm tra key...');
  try {
    const result = await callLLM('Reply with exactly one word: OK');
    console.log('✔ Key hợp lệ. Phản hồi test:', JSON.stringify(result).slice(0, 60));
    return true;
  } catch (err) {
    console.error('✘ Key KHÔNG hợp lệ hoặc gọi API thất bại:');
    console.error('  ' + err.message);
    return false;
  }
}

// ============ Main ============

(async () => {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Không tìm thấy thư mục nguồn: ${SRC_DIR}`);
    process.exitCode = 1;
    return;
  }

  const keyOk = await checkApiKey();
  if (!keyOk) {
    console.error('\nDừng lại vì key không hợp lệ.');
    process.exitCode = 1;
    return;
  }
  console.log('');

  const files = walk(SRC_DIR);
  if (files.length === 0) {
    console.log('Không tìm thấy file .md/.mdx nào.');
    return;
  }

  // Xây bản đồ đường dẫn cũ -> mới (nếu bật --rename), dùng để đổi tên + sửa link
  const mapping = new Map();
  if (RENAME) {
    console.log(`Đang dịch tên thư mục/file sang tiếng Anh cho ${files.length} file...`);
    for (const filePath of files) {
      const relPosix = toPosix(path.relative(SRC_DIR, filePath));
      const newRelPosix = await computeNewRelPath(relPosix);
      mapping.set(relPosix, newRelPosix);
      console.log(`  ${relPosix} → ${newRelPosix}`);
    }
    saveSlugCache(nameCache);
    console.log('');
  } else {
    for (const filePath of files) {
      const relPosix = toPosix(path.relative(SRC_DIR, filePath));
      mapping.set(relPosix, relPosix);
    }
  }

  console.log(`Bắt đầu dịch nội dung sang "${TARGET_LANG}" (provider: ${PROVIDER})...`);
  console.log(`Nguồn: ${SRC_DIR}`);
  console.log(`Đích:  ${OUT_DIR}\n`);

  copyNonMarkdownAssets();
  console.log('');

  await runPool(files, mapping);
  saveJsonMap(HASH_MANIFEST_PATH, HASH_MANIFEST);

  console.log('\nHoàn tất. Hãy kiểm tra lại kết quả trong thư mục đích trước khi commit.');
})();
