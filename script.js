function gamePlay(){

    let moves = ["rock", "paper", "scissors"]

    function computerPlay(){
        let moveN = Math.floor(Math.random() * 3)
        let computerMove = moves[moveN]
        
        return computerMove
    }

    function playerPlay(){
        let playerMove = prompt("What is your move?")

        if (playerMove == null ){
            playerMove = false
            
            return playerMove
        }
        else {
            playerMove = playerMove.toLowerCase()

            while (true){
                if(moves.indexOf(playerMove) !== -1){
                    break;
                }
                playerMove = prompt("Not a valid move. Try again:")
                playerMove = playerMove.toLowerCase()
            }
        
            return playerMove
        }

    }

    let games = 0
    let draws = 0
    let losses = 0
    let wins = 0

    let play = true;

    while (true){

        if (games == 0){ 
            play = confirm("Do you want to play Rock, Paper, Scissors?")
        }
        else {
            play = confirm("Do you want to play again?")
        }

        if(play == false){
            break;
        }

        let computerMove = computerPlay()
        let playerMove = playerPlay()

        if(playerMove == false){
            break;
        }
    
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
            alert("It's a draw!")
            draws++
        }
        else if (winner == "computer"){
            alert("You lose! " + computerMove + " beats " + playerMove)
            losses++
        }
        else if (winner == "player"){
            alert("You win! " + playerMove + " beats " + computerMove)
            wins++
        }

        games++
    
    }

    alert("Thanks for playing! You played " + games + " games, won " + wins + ", lost " + losses + ", and drew " + draws + ".")
}