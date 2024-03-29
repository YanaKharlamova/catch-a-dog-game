# Catch a dog game
## Project description
This is my JS game, where you must catch as many dogs as you can, while they are popping out different boxes randomly.

Live version:  https://yanakharlamova.github.io/catch-a-dog-game/;
## Built with:
* JS
* HTML
* CSS
* SCSS
## Implementation:
The concept of my game was a tribute to "Whack a mole" classic game.
The core structure of this project is formed by these few main functions:
* A function to make a random time for dog to pop from the box:

**function randomTime()**

* A function to choose the random box from which a dog will peep:

**function randomBox()**

* A function to make the dog pop from the random box using the two above functions:

**function peep()**
* Start of the game:

**function startGame()**
* A function to actually catch a dog:

**function catchDog()**
## Installing
To play this game and to update data automatically, you just need to run code with these commands in your terminal():

`npm i`;

`npm i sass`;

`"sass": "sass --watch style.sass style.css"` - add this code to scripts in package.json file.

And to actually run game: `npm run sass`
## Screenshot
**1.**

![](screenshot/catch-a-dog-game.PNG)

**2**. 

![](screenshot/catch-a-dog-game2.PNG)
