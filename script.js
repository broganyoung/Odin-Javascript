let games = 0
let draws = 0
let losses = 0
let wins = 0
let gameMessage = ""
let computerMessage = ""
let effectMessage = ""

function gamePlay(inputMove){

    let moves = ["rock", "paper", "scissors"]
    let effects = ["It's not very effective.", "It's super effective!"]

    function computerPlay(){
        let moveN = Math.floor(Math.random() * 3)
        let computerMove = moves[moveN]
        
        return [computerMove, moveN]
    }

    let computerVars = computerPlay()
    let computerMove = computerVars[0]
    let moveN = computerVars[1]

    let playerMove = inputMove

    computerImagePath = "images/" + computerMove + ".png"

    document.getElementById("computerImagePath").src = computerImagePath

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
        effectMessage = ""
        draws++
    }
    else if (winner == "computer"){
        gameMessage = "You lose! " + computerMove + " beats " + playerMove
        effectMessage = effects[1]
        losses++
    }
    else if (winner == "player"){
        gameMessage = "You win! " + playerMove + " beats " + computerMove
        effectMessage = effects[0]
        wins++
    }

    games++

    computerMessage = "The computer chose " + computerMove + "! " + effectMessage

    document.getElementById("gameMessage").innerHTML = gameMessage;
    document.getElementById("computerMessage").innerHTML = computerMessage;

    document.getElementById("games").innerHTML = "Total games: " + games;
    document.getElementById("wins").innerHTML = "Total wins: " + wins;
    document.getElementById("draws").innerHTML = "Total draws: " + draws;
    document.getElementById("losses").innerHTML = "Total losses: " + losses;
    
}