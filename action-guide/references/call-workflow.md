# Call workflow

Call Workflow is an action that allows the currently running script (parent Workflow) to call and execute another pre-created script (child Workflow) in the system. This is a powerful tool for breaking down complex processes into independently managed modules, helping to optimize the reuse of automation logic.

🎥 Watch the tutorial video: [Here](https://youtu.be/OOqmfpq8IUA).

> ⚠️ Note that the Test action feature will not work with Call workflow.

#### Configuration parameters:

• Reference file: Select from your list of child workflows.

#### Mechanism of operation:

When the parent Workflow reaches the Call Workflow step, the system will pause the main thread and transfer execution rights to the child Workflow. After the child Workflow completes, the system will automatically return to the parent Workflow and continue executing the next steps.

You can create a child workflow by clicking the + sign in the upper right corner of the Main workflow -> Select Create new workflow (to create a new one) or Import from existing file (to select from an existing file).

#### Practical example: Automatic account login flow

Suppose you are scripting for mass account management for MMO projects, instead of writing login code in every script, you create a separate Workflow named `login_module`:

• Step 1: In the main Workflow, after opening the browser, you drag the Call Workflow action.

• Step 2: In the Reference file section, you select `login_module`.

• Step 3: In the Parameters section, you pass the variables `$user` and `$pass` from the main Workflow to the child Workflow.

• Step 4: When the main Workflow reaches this point, it will "call" `login_module` to perform the actions of entering user/pass, clicking login, and handling captcha. After that, it automatically returns to the main Workflow to continue tasks such as running Tools, doing Airdrop, or posting products.

Technical notes:

• Ensure that the child Workflow has been saved and its logic checked before calling.

• Check the consistency of variable names between the parent and child Workflows to ensure data is transmitted accurately and without conflict. To use a variable from the child workflow, you write in the syntax: `$workflow_name_variable_name`, for example, as shown below, in the Main workflow, if the `login_module` has a variable `$status`, then to use it in the Main workflow, you need to enter `$login_module_status`.

<figure><img src="../../.gitbook/assets/image (246).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (247).png" alt=""><figcaption></figcaption></figure>