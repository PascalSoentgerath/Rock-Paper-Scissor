

const game = {
    playerScore: 0,
    computerScore: 0,

    start() {
        for (let i = 0; this.playerScore < 5 && this.computerScore < 5; i++) {
            const selections = this.chooseOption()

            const result = this.playRound(selections[0], selections[1])
            this.showResult(result)
            this.checkScore()
        }
    },

    chooseOption() {
        let playerSelection = prompt("Choose Rock, Paper or Scissor").toLowerCase()
        let computerSelection = this.getComputerChoice()
        return [playerSelection, computerSelection]
    },

    getComputerChoice() {
        const randomNumber =  Math.floor(Math.random() * 3) + 1
    
        switch (randomNumber) {
            case 1: return "rock"
                    break;
            case 2: return "paper"
                    break;
            default: return "scissor"
        }
    },

    playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie, try again!"
        } else {
            if (playerSelection === "rock") {
                if (computerSelection === "paper") {
                    return "You lose! Paper beats Rock"
                } else if (computerSelection === "scissor") {
                    return "You win! Rock beats Scissor"
                }
            }
    
            if (playerSelection === "paper") {
                if (computerSelection === "scissor") {
                    return "You lose! Scissor beats Paper"
                } else if (computerSelection === "rock") {
                    return "You win! Paper beats rock"
                }
            }
    
            if (playerSelection === "scissor") {
                if (computerSelection === "rock") {
                    return "You lose! Rock beats Scissor"
                } else if (computerSelection === "paper") {
                    return "You win! Scissor beats Paper"
                }
            }
        }
    
        alert("Please type in 'Rock', 'Paper' or 'Scissor ")
        },

    showResult(result) {
        if (result === undefined) {
            return
        }
        if (result.includes("You win")) {
            this.updateScore("player")
            console.log(result)
        }
        if (result.includes("You lose")) {
            this.updateScore("computer")
            console.log(result)
        }
        if (result.includes("It's a tie")) {
            console.log(result)
            alert("Tie!")
        }
    },

    updateScore(winner) {
        if (winner === "player") {
            this.playerScore = this.playerScore + 1
            alert(`${this.playerScore} - ${this.computerScore}`)
        }
        if (winner === "computer") {
            this.computerScore = this.computerScore + 1
            alert(`${this.playerScore} - ${this.computerScore}`)
        }
    },

    checkScore() {
        if (this.playerScore === 5) {
            this.resetScore()
            alert("Congratulations! You Won")
            if (confirm("Want to play again?")) {
                this.start()
            }
        }
        if (this.computerScore === 5) {
            this.resetScore()
            alert("Unlucky! You lose")
            if (confirm("Want to play again?")) {
                this.start()
            }
        }
                    
    },

    resetScore() {
        this.playerScore = 0
        this.computerScore = 0
    }
}

game.start()
