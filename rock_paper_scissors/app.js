const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay= document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1 ;
   
    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if (randomNumber === 3){
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult () {
    if(computerChoice ==='rock' && userChoice === 'paper'){
    result = 'You Win!!!!';
    }else if (computerChoice === 'paper' && userChoice === 'rock'){
        result= 'Computer Wins :(';
    }else if(computerChoice ==='scissors' && userChoice === 'paper'){
        result='Computer Wins :(';
    }else if(computerChoice ==='rock' && userChoice === 'scissors'){
        result = 'Computer Wins :(';
    }else if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Win!!!';
    }else if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win!!!';
    }else{
        result = 'Its a DRAW!!!!';
    }

    resultDisplay.innerHTML = result;
}
