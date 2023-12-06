

// Hat eine der beiden Variablen 5 erreicht, gewinnt die jeweilige Seite,
// der Score wird resettet,
// und das Spiel startet neu
// Zudem soll nach jeder Runde ein STRING ausgegeben werden welcher den Spielstand anzeigt

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissor").toLowerCase()
        const computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)

        if (result === undefined) {
            continue
        }
        if (result.includes("You win")) {
            playerScore++
            console.log(result)
            updateScore(playerScore, computerScore)
        }
        if (result.includes("You lose")) {
            computerScore++
            console.log(result)
            updateScore(playerScore, computerScore)
        }
        if (result.includes("It's a tie")) {
            console.log(result)
            alert("Tie!")
        }
    }

    if (playerScore === 5) {
        alert("Congratulations! You Won")
        if (confirm("Want to play again?")) {
            game()
        }
    }
    if (computerScore === 5) {
        alert("Unlucky! You lose")
        if (confirm("Want to play again?")) {
            game()
        }
    }
}

function getComputerChoice() {
    const randomNumber =  Math.floor(Math.random() * 3) + 1

    switch (randomNumber) {
        case 1: return "rock"
                break;
        case 2: return "paper"
                break;
        default: return "scissor"
    }
}

function playRound(playerSelection, computerSelection) {
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
}

function updateScore(player, computer) {
    alert(`${player} - ${computer}`)
}

game()