console.log("hello world!");

// start the game


// generate computer input for rock paper scissor
const options = ["rock", "paper", "scissors"];

function computerPlay (options) {
    return options[Math.floor(Math.random() * options.length)];
}

// take user input on rock, paper, or scissor
function playerSelection () {
    var choice = prompt(String("What is your move? Choose 'rock', 'paper', or 'scissor'."))
    var finalChoice = String(choice.toLowerCase());
    return finalChoice;
}

// compare user input and computer input
let comp_choice = computerPlay(options);
let player_choice = playerSelection ();
console.log (comp_choice);
console.log (player_choice);


// determine winner
