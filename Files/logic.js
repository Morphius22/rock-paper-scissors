console.log("hello world!");

// start the game


// generate computer input for rock paper scissor
let computer_score = 0;
let player_score = 0;

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

    function displayScore() {
        const span = document.querySelector('#container')
        const score = document.createElement('h4');
        score.classList.add('score');
        score.textContent = "The current score is: " + "Computer: " + computer_score + " Player: " + player_score;
        span.append(score);
    }

    function displayChoices() {
        const span = document.querySelector('#container')
        const choices = document.createElement('h4');
        choices.classList.add('choices');
        choices.textContent = "Computer chose: " + computer_choice + " and the Player chose: " + user_choice;
        span.append(choices);
    }

    function determineFinalWinner () {
        if (computer_score == 5) {
            const span = document.querySelector('#container')
            const finalWinner = document.createElement('h4');
            finalWinner.classList.add('final-winner');
            finalWinner.textContent = "Computer wins!";
            span.append(finalWinner);
            computer_score = 0;
            player_score = 0;
        } else if (player_score == 5) {
            const span = document.querySelector('#container')
            const finalWinner = document.createElement('h4');
            finalWinner.classList.add('final-winner');
            finalWinner.textContent = "Player wins!";
            span.append(finalWinner);
            computer_score = 0;
            player_score = 0;
        }
    }

    function removeLastRound (){
        setTimeout(function(){
            $('.choices').remove();
          }, 5000);

          setTimeout(function(){
            $('.score').remove();
          }, 5000);

          setTimeout(function(){
            $('.final-winner').remove();
          }, 5000);
    }

    function winner (computer_choice, user_choice) {
        if (computer_choice === "rock" && user_choice === "paper") {
            player_score += 1;
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Player wins! Rock beats paper!"
        } else if (computer_choice === "rock" && user_choice === "rock") {
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Its a tie! You both selected rock."
        } else if (computer_choice === "rock" && user_choice === "scissors") {
            computer_score += 1;
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Computer wins! Rock beats scissors!" 
        } else if (computer_choice === "paper" && user_choice === "paper") {
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Its a tie! You both selected paper."
        } else if (computer_choice === "paper" && user_choice === "rock") {
            computer_score += 1;
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Computer wins! Paper beats rock!" 
        } else if (computer_choice === "paper" && user_choice === "scissors") {
            player_score += 1;
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Player wins! Scissors beat paper!" 
        } else if (computer_choice === "scissors" && user_choice === "paper") {
            computer_score += 1;
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Computer wins! Scissors beat paper."
        } else if (computer_choice === "scissors" && user_choice === "rock") {
            player_score += 1;
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
            return "Player wins! Rock beats scissors!" 
        } else if (computer_choice === "scissors" && user_choice === "scissors") {
            displayChoices();
            displayScore();
            determineFinalWinner ();
            removeLastRound ()
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