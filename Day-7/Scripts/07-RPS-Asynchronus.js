let score = JSON.parse(localStorage.getItem('sss')) || {wins:0,losses:0,ties:0};
let isAutoPlay = false;
let intervalId;

updateScore();

document.querySelector(".js-rock").addEventListener("click",() =>{
    playgame('rock');
})
document.querySelector(".js-paper").addEventListener("click",() =>{
    playgame('paper');
})
document.querySelector(".js-scissors").addEventListener("click",() =>{
    playgame('scissors');
})

document.body.addEventListener("keydown",(event)=>{
    if(event.key === 'r' || event.key === 'R')
        playgame('rock');
    if(event.key === 'p' || event.key === 'P')
        playgame('paper');
    if(event.key === 's' || event.key === 'S')
        playgame('scissors');

})

function onreset(){
    score={wins:0,losses:0,ties:0};
    updateScore();
    localStorage.removeItem('sss');
    document.querySelector('.js-result').innerHTML ='';
    document.querySelector('.js-choice').innerHTML ='';
}

function playgame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(computerMove==playerMove){
        result = 'Tie.';
        score.ties++;
    }
    else if((computerMove=='rock' && playerMove=='paper') || (computerMove=='paper' && playerMove=='scissors') || (computerMove=='scissors' && playerMove=='rock')){
        result = 'You win.';
        score.wins++;
    }
    else{
        result = 'You Lose';
        score.losses++;
    }
    localStorage.setItem('sss',JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-choice').innerHTML = `
    You
    <img src="Images/${playerMove}-emoji.png" class="icon">
    <img src="Images/${computerMove}-emoji.png" class="icon">
    Computer`; 
    updateScore();
    // alert(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    if(randomNumber >=0 && randomNumber<1/3){
        return 'rock';
    }
    else if(randomNumber >=1/3 && randomNumber<2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
function rst(){
    score={wins:0,losses:0,ties:0};
    updateScore();
    localStorage.removeItem('sss');
    document.querySelector('.js-result').innerHTML ='';
    document.querySelector('.js-choice').innerHTML ='';
    if(isAutoPlay){
        isAutoPlay = false;
        clearInterval(intervalId);
    }
}
function autoPlay(){
    if(!isAutoPlay){
        isAutoPlay = true;
        intervalId = setInterval(function(){
            playgame(pickComputerMove());
        },1000)    
        document.querySelector('.autoPlayBtn').innerHTML = 'Stop Play';
    }
    else{
        isAutoPlay = false;
        clearInterval(intervalId);
        document.querySelector('.autoPlayBtn').innerHTML = 'Auto Play';
    }
}