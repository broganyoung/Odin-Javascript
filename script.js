let games = 0
let draws = 0
let losses = 0
let wins = 0
let gameMessage = ""

function gamePlay(inputMove){

    let moves = ["rock", "paper", "scissors"]

    function computerPlay(){
        let moveN = Math.floor(Math.random() * 3)
        let computerMove = moves[moveN]
        
        return [computerMove, moveN]
    }

    let computerVars = computerPlay()
    let computerMove = computerVars[0]
    let moveN = computerVars[1]

    let playerMove = inputMove

    let computerImagePath = ""

    for (let i = 0; i < 3; i++){

        for (let j = 0; j < 3; j++) {
            
            computerImagePath = "images/" + moves[j] + ".png"
        
            document.getElementById("computerImagePath").src = computerImagePath
            console.log(computerImagePath)
    
        }

    }    
    
    for (let j = 0; j < (3 - moveN); j++) {
            
        computerImagePath = "images/" + moves[j] + ".png"
    
        document.getElementById("computerImagePath").src = computerImagePath
        console.log(computerImagePath)

    }
    console.log(computerMove)

    let winner = "null"

    if (playerMove == computerMove){
        winner = "draw"
    }
    else if (playerMove == "rock"){

        if (computerMove == "paper"){
            winner = "computer"
        }

        if (computerMove == "scissors"){
            winner = "player"
        }

    }
    else if( playerMove == "paper"){

        if (computerMove == "scissors"){
            winner = "computer"
        }

        if (computerMove == "rock"){
            winner = "player"
        }

    }
    else if (playerMove == "scissors"){

        if (computerMove == "rock"){
            winner = "computer"
        }

        if (computerMove == "paper"){
            winner = "player"
        }

    }

    playerMove = playerMove.substring(0, 1).toUpperCase() + playerMove.substring(1)
    computerMove = computerMove.substring(0, 1).toUpperCase() + computerMove.substring(1)

    if (winner == "draw"){
        gameMessage = "It's a draw!"
        draws++
    }
    else if (winner == "computer"){
        gameMessage = "You lose! " + computerMove + " beats " + playerMove
        losses++
    }
    else if (winner == "player"){
        gameMessage = "You win! " + playerMove + " beats " + computerMove
        wins++
    }

    games++

    document.getElementById("gameMessage").innerHTML = gameMessage;

    document.getElementById("games").innerHTML = games;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("draws").innerHTML = draws;
    document.getElementById("losses").innerHTML = losses;
    
}