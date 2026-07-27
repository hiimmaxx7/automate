# Random number

Random number is an action used to generate a random integer within a set range from a minimum value to a maximum value, then save the result to an output variable.

This action is commonly used to generate simulated data (age, number of friends you want to add), randomly select a data row, or create a flexible random wait time according to your own logic.

🎥 Watch more tutorial videos: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Min: The smallest possible number value.
* Max: The largest possible number value.
* Output variable: The variable name storing the newly generated random number.

#### Practical example: Randomly select the number of posts to interact with

When nurturing social media accounts, to avoid all accounts scrolling through the exact same number of posts and raising suspicion from the system, you should have each account interact with a random number of posts.

* How to configure: Call the Random number action, set Min to `3`, Max to `7`, and set the _Output variable_ field to `$randomPosts`.
* Result: When the workflow reaches this step, the system will randomly draw a number between 3 and 7 (For example: Profile 1 draws the number `4`, Profile 2 draws the number `6`). You just need to pass this `$randomPosts` variable into the End field of the For loop that follows, and each account will automatically scroll and interact according to its own randomly drawn number.

<figure><img src="../../.gitbook/assets/image (144).png" alt=""><figcaption></figcaption></figure>