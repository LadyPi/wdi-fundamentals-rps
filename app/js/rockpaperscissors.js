////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////
/*           Vanessa's Code                  */
////////////////////////////////////////////////

// repl.it  site: // https://repl.it/CL45/37

//work on 'use strict';

var computerMove, playerMove, winner, randomMove;

var getInput = function() {
    var answer = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  playerMove = answer;
  return playerMove;
};

// randomPlay improvements to be made: refactoring.
var randomPlay = function() { 
    var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            randomMove = "rock";
        } else if (randomNumber < 0.66) {
            randomMove = "paper";
        } else {
            randomMove = "scissors";
    }
    computerMove = randomMove;
    return computerMove;
};

// getPlayerMove improvements to be made: refactoring and securing that if false is answered it keeps prompting for right value choice.
var getPlayerMove = function(move) {
    move = getInput();
    if (move == "rock" || move == "paper" || move == "scissors" || move == "Rock" || move == "Paper" || move == "Scissors") {
    } else if (move != true) { 
        var tryAgain = prompt("Please make sure you type in 'rock', 'paper', or 'scissors' as one of your choices. Goodluck!");
        playerMove = tryAgain;
}
    playerMove = move;
    return playerMove;
};

// getComputerMove improvements to be made: refactoring.
var getComputerMove = function(move) {
    move = randomPlay();
    if (move == "rock" || move == "paper" || move == "scissors" || move == "Rock" || move == "Paper" || move == "Scissors") {
    } else if (move != true) { 
        var computerFoul = prompt("Computer foul! Please make sure you type in 'rock', 'paper', or 'scissors' as one of your choices. Goodluck!");
        computerMove = computerFoul;
 }
     computerMove = move;
     return computerMove;
 };

// getWinner improvements to be made: refactoring.
var getWinner = function (playerMove,computerMove) {
    playerMove = getPlayerMove();
    computerMove = randomPlay();
// player:rock, Rock/computer:scissors
    if (playerMove =='rock' && computerMove == 'scissors') {
            console.log("Rock beats scissors, the player wins!");
            window.document.write("Rock beats scissors, the player wins!");
            winner = "Player";
        } else if (playerMove =='Rock' && computerMove == 'scissors') {
            console.log("Rock beats scissors, the player wins!");
            window.document.write("Rock beats scissors, the player wins!");
            winner = "Player";
// player:scissors, Scissors/computer:rock
        } else if (playerMove == 'scissors' && computerMove =='rock') {
            console.log("Rock beats scissors, the computer wins!");
            window.document.write("Rock beats scissors, the computer wins!");
            winner = "Computer";
        } else if (playerMove == 'Scissors' && computerMove =='rock') {
            console.log("Rock beats scissors, the computer wins!");
            window.document.write("Rock beats scissors, the computer wins!");
            winner = "Computer";
// player:scissors, Scissors/computer:paper
        } else if (playerMove =='scissors' && computerMove == 'paper') {
            console.log("Scissors beats paper, the player wins!");
            window.document.write("Scissors beats paper, the player wins!");
            winner = "Player";
        } else if (playerMove =='Scissors' && computerMove == 'paper') {
            console.log("Scissors beats paper, the player wins!");
            window.document.write("Scissors beats paper, the player wins!");
            winner = "Player";
// player:paper, Paper/computer:scissors
        } else if (playerMove == 'paper' && computerMove =='scissors') {
            console.log("Scissors beats paper, the computer wins!");
            window.document.write("Scissors beats paper, the computer wins!");
            winner = "Computer";
        } else if (playerMove == 'Paper' && computerMove =='scissors') {
            console.log("Scissors beats paper, the computer wins!");
            window.document.write("Scissors beats paper, the computer wins!");
            winner = "Computer";
// player:paper, Paper/computer:rock
        } else if (playerMove =='paper' && computerMove == 'rock') {
            console.log("Paper beats rock, the player wins!");
            window.document.write("Paper beats rock, the player wins!");
            winner = "Player";   
        } else if (playerMove =='Paper' && computerMove == 'rock') {
            console.log("Paper beats rock, the player wins!");
            window.document.write("Paper beats rock, the player wins!");
            winner = "Player";  
// player:rock, Rock/computer:paper
        } else if (playerMove == 'rock' && computerMove =='paper') {
            console.log("Paper beats rock, the computer wins!");
            window.document.write("Paper beats rock, the computer wins!");
            winner = "Computer";
        } else if (playerMove == 'Rock' && computerMove =='paper') {
            console.log("Paper beats rock, the computer wins!");
            window.document.write("Paper beats rock, the computer wins!");
            winner = "Computer";
        } else {
            console.log("It's a tie!");
            window.document.write("It's a tie!");
            winner = "tie";
    }
    return winner;
};

//playToFive improvements to be made: adjust number of plays. Currently it will run from 1 to 5 plays at random and refactoring.
// Fixed random plays issue. Game works properly. 
var playToFive = function() {
    alert("Let's play Rock, Paper, Scissors");
    window.document.write("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins != 5 && computerWins != 5) {
        winner = getWinner(playerMove, computerMove);
        // console.log("Player chooses " + playerMove + " and the Computer chooses " + computerMove + "." );
        // window.document.write("Player chooses " + playerMove + " and the Computer chooses " + computerMove + "." );
        if (winner == "Player") {
            playerWins ++;
        } else if (winner == "Computer") {
            computerWins ++;
        // } else if (winner == "tie") {
        } else {
            console.log("Give it another go!");
    // break;
    }
  }  
    console.log("The scoreboard sits at Player:" + playerWins + " and Computer:" + computerWins + ".");
    window.document.write("The scoreboard sits at Player:" + playerWins + " and Computer:" + computerWins + ".");
};
