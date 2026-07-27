# If, Else if and Else

This is a group of blocks used to branch the scenario based on actual conditions at runtime. Instead of running straight from top to bottom, the system will check whether the condition you set is True or False to decide the next direction for the scenario. In other words, this group of blocks acts as the decision-making brain, helping the scenario automatically handle all fluctuating situations on the browser flexibly.

🎥 Watch more tutorial videos: [Here](https://youtu.be/ZFS_82u23Cs).

#### 1. Condition block (If)

If is a block that checks a defined condition first. If that condition is True, the system will perform all the actions placed inside this If block. If False, the system will skip it and continue checking below.

#### 2. Additional condition block (Else if)

Else if always comes after an If block (or after another Else if). This block is triggered when all the conditions above it are False. The system will proceed to check its own condition — if True, it runs the actions inside; if False, it skips again.

> You can add multiple consecutive Else if blocks to check many different cases of the scenario.

#### 3. Negation block (Else)

Else is the final wrapping block in the condition chain and does not require configuring any condition at all. When all the If and Else if blocks above are False (no case is satisfied), the system will automatically jump in and execute the actions inside the Else block.

<figure><img src="../../.gitbook/assets/image (106).png" alt=""><figcaption></figcaption></figure>

#### Practical example: Checking the login status of an account

When you open a website (for example: Facebook, X...), the status of the account on the profile may vary. You can use an If - Else if - Else chain to smoothly handle every situation:

* If: See the "Create post" button (proving the account is already logged in).
  * _Action_: Proceed to fill in the content and post right away.
* Else if: See the "Username / Password" input field (the account has been logged out).
  * _Action_: Call data from Variables to fill in the account, password, and click Login.
* Else (all other cases): No Post button and no Login field visible (the account may have been checkpointed or there's a network error).
  * _Action_: Use the Stop command to stop the program or take a Screenshot to check later.