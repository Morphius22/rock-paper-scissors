console.log("hello world!");

// start the game


// generate computer input for rock paper scissor

function computerPlay (options) {
    return options[Math.floor(Math.random() * options.length)];
}

// take user input on rock, paper, or scissor
function playerSelection (choice) {
    console.log(choice)
    return String(choice);
}

// compare user input and computer input

function playRound (user_choice) {
    const options = ["rock", "paper", "scissors"];
    let computer_choice = computerPlay (options);
    console.log (computer_choice);
    console.log (user_choice);

    function winner (computer_choice, user_choice) {
        if (computer_choice === "rock" && user_choice === "paper") {
            return "Player wins! Rock beats paper!"
        } else if (computer_choice === "rock" && user_choice === "rock") {
            return "Its a tie! You both selected rock."
        } else if (computer_choice === "rock" && user_choice === "scissors") {
            return "Computer wins! Rock beats scissors!" 
        } else if (computer_choice === "paper" && user_choice === "paper") {
            return "Its a tie! You both selected paper."
        } else if (computer_choice === "paper" && user_choice === "rock") {
            return "Computer wins! Paper beats rock!" 
        } else if (computer_choice === "paper" && user_choice === "scissors") {
            return "Player wins! Scissors beat paper!" 
        } else if (computer_choice === "scissors" && user_choice === "paper") {
            return "Computer wins! Scissors beat paper."
        } else if (computer_choice === "scissors" && user_choice === "rock") {
            return "Player wins! Rock beats scissors!" 
        } else if (computer_choice === "scissors" && user_choice === "scissors") {
            return "Its a tie! You both selected scissors!" 
        }
    }

    let game_winner = winner(computer_choice, user_choice);
    console.log (game_winner);
}

const rock_btn = document.querySelector("#rock-button");
console.log (rock_btn);
rock_btn.addEventListener("click", function(event) {
    playRound("rock");
});

const paper_btn = document.querySelector("#paper-button");
console.log (paper_btn);
paper_btn.addEventListener("click", function(event) {
    playRound("paper");
});

const scissors_btn = document.querySelector("#scissors-button");
console.log (scissors_btn);
scissors_btn.addEventListener("click", function(event) {
    playRound("scissors");
});




// function game () {
//     let round_one = playRound ();
//     console.log (round_one);
//     let round_two = playRound ();
//     console.log (round_two);
//     let round_three = playRound ();
//     console.log (round_three);
//     let round_four = playRound ();
//     console.log (round_four);
//     let round_five = playRound ();
//     console.log (round_five);
// }

// game()