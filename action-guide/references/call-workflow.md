# Call workflow

Call Workflow is an action that allows the currently running script (parent Workflow) to call and execute another script (child Workflow) that has already been created in the system. This is a powerful tool for breaking down complex processes into independently manageable modules, helping to optimize the reuse of automation logic.

🎥 Watch more tutorial videos: [Here](https://youtu.be/OOqmfpq8IUA).

> ⚠️ Note that the Test action feature will not work with Call workflow.

#### Configuration parameters:

• Reference file: Select from the list of your sub-workflows.

#### How it works:

When the parent Workflow reaches the Call Workflow step, the system will pause the main flow and transfer execution to the child Workflow. Once the child Workflow completes, the system will automatically return to the parent Workflow and continue executing the subsequent steps.

You can create a sub-workflow by clicking the + sign in the top right corner of the Main workflow section -> Select Create new workflow (if creating a new one) or Import from existing file (if choosing from an existing file).

#### Practical example: Automated account login flow

Suppose you are building a script to bulk-nurture accounts for MMO projects. Instead of writing login code in every script, you create a separate Workflow named `login_module`:

• Step 1: In the main Workflow, after opening the browser, drag in the Call Workflow action.

• Step 2: In the Reference file section, select `login_module`.

• Step 3: In the Parameters section, pass the variables `$user` and `$pass` from the main Workflow to the child Workflow.

• Step 4: When the main Workflow reaches this point, it will "call" `login_module` to complete the actions of filling in the user/pass, clicking login, and handling the captcha. Afterward, it automatically returns to the main Workflow to continue with tasks such as running the Tool, doing Airdrop, or posting products.

Technical note:

• Make sure the child Workflow has been saved and its logic verified before calling it.

• Check the consistency of variable names between the parent and child Workflows to ensure data is transferred accurately and without conflicts. To use a variable from a sub-workflow, write it in the syntax: `$workflow_name_variable_name`, for example as shown in the image below, in the Main workflow, if the login_module module has a variable `$status`, then to use it in the Main workflow you need to enter `$login_module_status`.

<figure><img src="../../.gitbook/assets/image (246).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (247).png" alt=""><figcaption></figcaption></figure>