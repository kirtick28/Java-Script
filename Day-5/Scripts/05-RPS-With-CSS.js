let score = JSON.parse(localStorage.getItem('ss')) || {wins:0,losses:0,ties:0};

updateScore();

function onreset(){
    score={wins:0,losses:0,ties:0};
    updateScore();
    localStorage.removeItem('ss');
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
    localStorage.setItem('ss',JSON.stringify(score));
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