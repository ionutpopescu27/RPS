
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice(){
    const choice =  prompt('Please enter your choice: rock, paper or scissors').toLowerCase();
    console.log(choice);

    switch(choice){
        case 'rock':
        case 'paper':
        case 'scissors':
            return choice;
        default: return 'Invalid choice';   
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,  computerChoice){

    if(humanChoice === computerChoice){
        console.log('It is a tie');
    } else { if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'){
            console.log("You win!" + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else { console.log("You lose!" + computerChoice + " beats " + humanChoice);
                 computerScore++;
        }
    }
}

function playGame(){
    let i = 0;
    while(i<5){
     playRound(getHumanChoice(), getComputerChoice());
     i++;
    }

    if( humanScore > computerScore){
        crossOriginIsolated.log("  You won the game! " + humanScore + " to " + computerScore);
    }
    else console.log("You lost the game!" + computerScore + " to " + humanScore);
}

playGame();