# simon-game

## jQuery Practice Project - App Brewery Section 15: Boss Level Challenge 2 - The Simon Game

### Steps

- 1 Add JavaScript and jQuery
- 2 Create a New Pattern
- 3 Show the Sequence to the User with Animations and Sounds
- 4 Check Which Button is Pressed
- 5 Add Sounds to Button Clicks
- 6 Add Animations to User Clicks
- 7 Start the Game
- 8 Check the User's Answer Against the Game
- 9 Game Over
- 10 Restart the Game

### Learned

I had difficulty in step 8. My code was able to perform the check after the entire sequence, but not after each play. I continued through to step 10, then made necessary adjustments after viewing the solution.

I decided to add a `userPlay()` in order to prevent the user from making annoying random clicks prior to the start of the game (you can see the difference by comparing [my version](https://faraja17.github.io/simon-game/) with [App Brewery's solution version of the game](https://londonappbrewery.github.io/Simon-Game/) by clicking buttons before you start the game or after the game is over). In order to minimize random clicks at the end of the game, I added a `setTimeOut()` that refreshes the page within 500 milliseconds. A couple of random clicks can still make it through with effort, though.

After testing the game on my phone, I realized that I needed to enable a click option to start the game, so I swiftly used jQuery to revise the `startGame()` with an event handler--in under a minute!

This was a great challenge, a nice review of DOM manipulation, and I like jQuery!
