console.log("computerPlay() to assign a random move to your ai opponent. playerInput() to be prompted for your desired move. oneRound to play a single round.");
const rock = 1;
const paper = 2;
const scissors = 3;
const moves = [rock, paper, scissors]; 
let computerMove;
let playerMove;
let yourPoints = 0;
let cpuPoints = 0;
let win = 0;


function getInput(){
    const playerHook = (window.prompt('Make your move', undefined))
    if (playerHook.toLowerCase() == 'rock'){
        playerMove = rock;
}   else if (playerHook.toLowerCase() == 'paper') {
        playerMove = paper;
}   else if (playerHook.toLowerCase() == 'scissors'){
    playerMove = scissors;
} else {
    playerMove = undefined;
}
}


function getCpuInput() {
   const computerChoice = Math.floor(Math.random() * moves.length); 
    if (computerChoice == 1) {
        computerMove = rock;
    } else if (computerChoice == 2) { 
        computerMove = paper;
    } else {
        computerMove = scissors;
    }
}

function oneRound() {
    if (playerMove == 1 && computerMove == 1) {
        } else if (playerMove == 1 && computerMove == 2) {
        cpuScore = 1;
        } else if (playerMove == 1 && computerMove == 3) {
        playerScore = 1;
    }
    if (playerMove == 2 && computerMove == 2) {
        } else if (playerMove == 2 && computerMove == 3) {
        cpuScore = 1;
        } else if (playerMove == 2 && computerMove == 1) {
        playerScore = 1;
    }
    if (playerMove == 3 && computerMove == 3) {;
        } else if (playerMove == 3 && computerMove == 1) {
        cpuScore = 1;
        } else if (playerMove == 3 && computerMove == 2) {
        playerScore = 1;
    }
}

function scoreKeep(){

if (playerScore > cpuScore) {
    yourPoints++;
    console.log('YOU:', yourPoints, 'CPU:', cpuPoints)
    } else if (cpuScore > playerScore) {
        cpuPoints++;
        console.log('YOU:', yourPoints, 'CPU:', cpuPoints)
        } else console.log('tie!')

if (yourPoints == 3) {
    console.log('WINNER:', yourPoints, 'LOSER:', cpuPoints)
    yourPoints = 0;
    cpuPoints = 0;
    cpuScore = 0;
    playerScore = 0;
    win = 1;
    console.log('You won the set!')
    } else if (cpuPoints === 3) {
        console.log('LOSER:', yourPoints, 'WINNER:', cpuPoints)
        yourPoints = 0;
        cpuPoints = 0;
        cpuScore = 0;
        playerScore = 0;
        win = 1;
        console.log('you lost! fuck.... how..')
        
}

} 

function play() {
    win = 0;
    do
    [getInput(), getCpuInput(), oneRound(), scoreKeep()]
    while(yourPoints || cpuPoints < 3 && win == 0)  
}