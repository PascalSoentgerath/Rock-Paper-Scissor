
addEventListener("DOMContentLoaded", () => {

    const gameMode_btns = document.querySelectorAll(".bestOf_btn")
    gameMode_btns.forEach(element => {
        element.addEventListener("click", () => {
  
            if (element.title === "Best of 3") {
                game.rounds = 3
                console.log(game.rounds)
            }
            if (element.title === "Best of 5") {
                game.rounds = 5
                console.log(game.rounds)
            }
            if (element.title === "Best of 7") {
                game.rounds = 7
                console.log(game.rounds)
            }
        })
    })

    const choice_btns = document.querySelectorAll(".player_choice")
    choice_btns.forEach(element => {
        element.addEventListener("click", () => {

            if (element.title === "Rock") {
                game.start(element.title)
            }
            if (element.title === "Paper") {
                game.start(element.title)
            }
            if (element.title === "Scissor") {
                game.start(element.title)
            }
        })
    })

})

const player_score = document.querySelector(".player_score")
const computer_score = document.querySelector(".computer_score")

const game = {
    rounds: "",
    playerScore: 0,
    computerScore: 0,

    start(option) {
            if (this.rounds !== "") {
                console.log(option.toLowerCase())
                const selections = this.chooseOption(option)

                const result = this.playRound(selections[0], selections[1])
                this.showResult(result)
                this.checkScore()
            }
    },

    chooseOption(option) {
            let playerSelection = option.toLowerCase()
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
    },

    showResult(result) {
            if (result === undefined) {
                return
            }
            if (result.includes("You win")) {
                this.updateScore("player")
            }
            if (result.includes("You lose")) {
                this.updateScore("computer")
            }
            if (result.includes("It's a tie")) {
                alert("Tie!")
            }
    },

    updateScore(winner) {
            if (winner === "player") {
                this.playerScore = this.playerScore + 1
                player_score.innerText = this.playerScore
            }
            if (winner === "computer") {
                this.computerScore = this.computerScore + 1
                computer_score.innerText = this.computerScore
            }
    },

    checkScore() {
            setInterval(() => {
                if (this.playerScore === this.rounds) {
                    alert("Congratulations! You Won")
                    this.resetScore()
                }
                if (this.computerScore === this.rounds) {
                    alert("Unlucky! You lose")
                    this.resetScore()
                }
            }, 100);
    
    },

    resetScore() {
            this.playerScore = 0
            this.computerScore = 0
            player_score.innerText = 0
            computer_score.innerText = 0
    }
}