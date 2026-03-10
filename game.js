
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const displayComputerChoice = document.querySelector('#computer_selection');
const displayWinner = document.querySelector('#winner');
const resetBtn = document.querySelector('.btn');
const allFigures = document.querySelectorAll('figure');

function checkWinner(playerChoice){

    const options = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random()* options.length);

    const computerChoice = options[randomIndex];

    document.querySelector('#results').style.display="block";
    document.querySelector('.button').style.display="block";


    displayComputerChoice.textContent ="Computer Choose: " + computerChoice;
        
    if (playerChoice === computerChoice){
        displayWinner.textContent = "Results: Its a tie!";

    }else if(
        (playerChoice === "rock" && computerChoice === "scissors")||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper"))
        {
        
        displayWinner.textContent = "Results: " + playerChoice + " wins!";
    }else{

        displayWinner.textContent = "Results: " + computerChoice + " wins!";
    }
}


function resetGame(){
    document.querySelector('#results').style.display = 'none';
    document.querySelector('.button').style.display = 'none'

    document.querySelector('#computer_selection').textContent = " ";
    document.querySelector('#winner').textContent = " ";

    allFigures.forEach(figure => figure.classList.remove('selected'));
}

function highlightChoice(choice){
    const selectedElement = document.getElementById(choice);
    if(selectedElement){
        selectedElement.classList.add("selected");
    }
}

function handleKeyPress(event){
    if(event.key === "r" || event.key === "R"){
        highlightChoice("rock");
        checkWinner("rock");
    }
    if(event.key === "p" || event.key === "P"){
        highlightChoice("paper");
        checkWinner("paper");
    }
    if(event.key === "s" || event.key === "S"){
        highlightChoice("scissors");
        checkWinner("scissors");
    }
}

paper.addEventListener('click', () => checkWinner("paper") );
rock.addEventListener('click', () => checkWinner("rock"));
scissors.addEventListener('click', () => checkWinner("scissors"));

resetBtn.addEventListener('click', resetGame);
document.addEventListener("keydown", handleKeyPress);

resetGame();












