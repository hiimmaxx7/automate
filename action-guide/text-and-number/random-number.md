# Random number

Random number is an action used to generate a random integer within a range from a minimum value to a maximum value set, and then store the result in an output variable.

This action is often used to create simulated data (age, number of friends to befriend), randomly select a row of data, or create a flexible random wait time according to your own logic.

🎥 See more tutorial video: [Here](https://youtu.be/nlEQsaxawt4).

#### Configuration parameters:

* Min: The smallest number value that can be obtained.
* Max: The largest number value that can be obtained.
* Output variable: The name of the variable that stores the generated random number.

#### Practical example: Randomly select the number of posts to interact with

When managing a social media account, to avoid having each account scroll through the same number of posts, which may raise suspicion from the system, you should have each account interact with a random number of posts.

* Configuration method: You call the Random number action, set Min to `3`, Max to `7`, and the _Output variable_ field to `$randomPosts`.
* Result: When the workflow reaches this step, the system will randomly draw a number between 3 and 7 (For example: Profile 1 draws the number `4`, Profile 2 draws the number `6`). You just need to pass this variable `$randomPosts` into the End field of the subsequent For loop, and each account will automatically scroll and interact according to the distinct number it drew.

<figure><img src="../../.gitbook/assets/image (144).png" alt=""><figcaption></figcaption></figure>