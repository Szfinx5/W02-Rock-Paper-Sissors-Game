function userMove(event){
    let userSelection = event.target.innerText;

    //Get the user move and display it
    let userMoveText = document.querySelector("#your-move");
    userMoveText.innerText = `Your move: ${userSelection}`;
}

function computerMove() {
    computerMoveText = document.querySelector("#computer-move");

    // Get a random number between 0 and less than 1
    let randomNumber = Math.random();
  
    // If randomNumber is between 0 and 0.33 return rock
    if (randomNumber >= 0 && randomNumber < 0.33) {
        computerMoveText.innerText = `Computer move: Rock`
        return "rock";
    }
  
    // If randomNumber is between 0.33 and 0.66 return paper
    if (randomNumber >= 0.33 && randomNumber < 0.66) {
        computerMoveText.innerText = "Computer move: Paper"
      return "paper";
    }
  
    // If randomNumber is between 0.66 and 1 return scissors
    if (randomNumber >= 0.66 && randomNumber < 1) {
        computerMoveText.innerText = "Computer move: Scissors"
      return "scissors";
    }
}

//Listening to the user selection and call the functions
let selectionButtons = document.querySelector(".buttons");
selectionButtons.addEventListener("click",userMove);
selectionButtons.addEventListener("click",computerMove);


//Ask for username and display it
let username = prompt("What should we call you?");
let welcomeText = document.querySelector("#welcome-username");
welcomeText.innerHTML = `Welcome, ${username}!`;




