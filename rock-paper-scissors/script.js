/**
 * @constructor RockPaperScissors
 */



  /**
   * Define properties
   * possibleChoices - property that is an array of choices @type {Array}
   * userChoice - property with our user choice @type {String}
   * computerChoice - property with our computer choice @type {String}
   */



  /**
   * getComputerChoice - randomly gets a number from 0-2 and will return a choice based on that index
   * @return {String}
   */



  /**
   * askUserChoice - function when called will log to our console to choose "rock, paper, or scissors"
   */



  /**
   * submitUserChoice - function when called will verify the submitted choice is valid
   * @return {String}
   */



  /**
   * init - assigns a value to our computer choice and logs out to the user to submit their choice
   */



  /**
   * reset - reassigns a value to our computer choice, resets user choice and relog to the user to submit their choice
   */



  /**
   * checkForWin - function to compare the random computer choice with the user submitted choice
   * @return {String}
   */


/**
 * Create a new game based off our constructor function
 */
var game = new RockPaperScissors();
// game.init();

// # Rock Paper Scissors (OOP)
//
// - Declare an object constructor function for a rock paper scissors game
 function RockPaperScissors() {
     this.possibleChoices = ['rock', 'paper', 'scissors'];
     this.userChoice = null;
     this.computerChoice = null;
     this.getComputerChoice = function() {
         var randomNumber = math.floor(math.random() * this.possiblechoices.length);
         this.computerChoice = this.possibleChoices[randomNumber];
         return this.computerChoice;
     }
     this.askUserChoice = function(){
       console.log('');
     }
     this.submitUserChoice = function(choice){
        userChoice = this.possibleChoices[choice];
        if(this.possibleChoices.indexOf(userChoice)){
          return userChoice;
        }
        else{
          userChoice = null;
          return console.error("You chose an invalid choice, please choose 0 for Rock, 1 for Paper, 2 for Scissors");
        }
     }
 }


// - Declare and assign three properties off our object constructor:
//     - **this.possibleChoices** assigned to an array of strings: 'rock', 'paper', 'scissors'
// - **this.userChoice** assigned null
// - **this.computerChoice** assigned null
//
// - Declare a method, getComputerChoice
// - parameters: none
// - returns: string
// - uses properties: `this.possibleChoices`, `this.computerChoice`
// - randomly pick one of the possible choices
// - assign that choice to the computerChoice property
//
// - Declare a method, askUserChoice
// - parameters: none
// - returns: none
// - logs out a message to the user to submit a choice
//
// - Declare a method, submitUserChoice
// - parameters: choice
// - returns: string
// - uses properties: `this.possibleChoices`
// - user will submit a valid choice to check for win/lose
//                                                - Check if the argument passed into the function matches our array of choices
// - true - assign that choice to our **this.user** property
// - return a string confirming the user's choice
// - else
// - return a string stating to the user to submit a valid choice
//
// - Declare a method, checkForWin
// - parameters: none
// - returns: string
// - uses properties: `this.userChoice`, `this.computerChoice`
// - Check for a win between the user choice and computer choice
//
// - Declare two additional game methods
// - init
// - parameters: none
// - returns: none
// - uses properties: `this.computerChoice`, `this.getComputerChoice`, `this.askUserChoice`
// - calls the methods that sets the computer's choice and asks the user to submit their choice
// - reset
// - parameters: none
// - returns: none
// - uses properties: `this.computerChoice`, `this.getComputerChoice`, `this.askUserChoice`, `this.userChoice`
// - similar to init but will additionally reset our user choice
//
// ## Extra
// - Implement additional properties or methods to account for Best-of-Five rounds
// - Implement clickable rock, paper, scissors DOM elements to submit the user choice
//
//
// ## Tim Version (Hard)
