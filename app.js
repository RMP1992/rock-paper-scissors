const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner = [0, 0]

const messenger = (mes) => {
    message.innerHTML = mes;
}

let checkWinner = (player, computer) => {
    if(player === computer) {
        return "Draw"
    }
    if(player === "Rock") {
        if(computer === "Paper"){
            return "Computer"
        }else{
            return "Player"
        }
    }
    if(player === "Paper") {
        if(computer === "Scissors"){
            return "Computer"
        }else{
            return "Player"
        }
    }
    if(player === "Scissors") {
        if(computer === "Rock"){
            return "Computer"
        }else{
            return "Player"
        }
    }
}

const playGame = (e) =>{
    let playerSelection = e.target.innerText;
    let computerSelection = Math.floor(Math.random() * 3)
    
    if(computerSelection  === 0) {
        computerSelection = "Rock"
    }else if (computerSelection === 1) {
        computerSelection = "Paper"
    }else {
        computerSelection = "Scissors"
    }
    console.log(playerSelection, computerSelection)
    let result = checkWinner(playerSelection, computerSelection);
    console.log(result)
    if(result === "Player") {
        result += " Victory"
        winner[0]++
    }else if (result === "Computer") {
        result += " Victory"
        winner[1]++
    }else {
        result += " results in a tie match"
    }
    score.innerHTML = "<small> Player</small>[" + winner[0] +"] <small>Computer</small>[" + winner[1] +"]";
    messenger(playerSelection + " vs " + computerSelection + "<br>" + result + "<br>")
}


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', playGame)
    
}

