document.addEventListener('DOMContentLoaded', function () {
    let currentPlayerTurn = 1;
    let player1Choice = "";
    let player2Choice = "";
    let isTwoPlayers = false;
    let player1Name = "Player 1";
    let player2Name = "Computer";
    let totalRounds = 1;
    let currentRound = 1;
    let player1Score = 0;
    let player2Score = 0;
    const shapes = ["rock", "paper", "scissors"];

    // Detect the type of event depending on the device
    const eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click";

    // Hide sections on startup
    document.getElementById("step-2").classList.add("d-none");
    document.getElementById("step-3").classList.add("d-none");
    document.getElementById("step-4").classList.add("d-none");
    document.getElementById("nextRoundButton").classList.add("d-none");

    // ‘Next’ button (Select players)
    document.getElementById("nextButton").addEventListener(eventType, function () {
        // Check that the number of players has not been selected
        const selectedPlayer = document.querySelector('input[name="players"]:checked');
        const errorMessage = document.getElementById("errorMessage");

        if (!selectedPlayer) {
            errorMessage.textContent = "Please select the number of players."; // Display error message
            errorMessage.style.display = 'block'; // Make the message visible
            return; // Stop the execution if the number of players was not selected
        } else {
            errorMessage.textContent = "";
            errorMessage.style.display = 'none';
        }

        isTwoPlayers = selectedPlayer.value === "2";

        // If ‘2 Players’ was selected, show player 2 section
        document.getElementById("player2-container").classList.toggle("d-none", !isTwoPlayers);
        document.getElementById("step-1").classList.add("d-none");
        document.getElementById("step-2").classList.remove("d-none");
    });

    // ‘Start Game’ button (enter names and number of rounds)
    document.getElementById("startGameButton").addEventListener(eventType, function () {
        player1Name = document.getElementById("player1").value || "Player 1";
        player2Name = document.getElementById("player2").value || (isTwoPlayers ? "Player 2" : "Computer");

        const selectedRounds = document.querySelector('input[name="rounds"]:checked');
        totalRounds = selectedRounds ? parseInt(selectedRounds.value) : 1;

        document.getElementById("player1Label").textContent = player1Name;
        document.getElementById("player2Label").textContent = player2Name;
        document.getElementById("turnInfo").textContent = `${player1Name}'s Turn`;
        document.getElementById("roundInfo").textContent = `Round ${currentRound} of ${totalRounds}`;
        document.getElementById("scoreBoard").textContent = `${player1Name}: 0 | ${player2Name}: 0`;

        document.getElementById("step-2").classList.add("d-none");
        document.getElementById("step-3").classList.remove("d-none");
    });

    // Selection game (rock, paper, scissors)
    document.querySelectorAll(".shape-button").forEach(button => {
        button.addEventListener(eventType, function () {
            const selectedShape = this.dataset.shape;

            if (currentPlayerTurn === 1) {
                player1Choice = selectedShape;
                if (isTwoPlayers) {
                    currentPlayerTurn = 2;
                    document.getElementById("turnInfo").textContent = `${player2Name}'s Turn`;
                } else {
                    player2Choice = shapes[Math.floor(Math.random() * shapes.length)];
                    setTimeout(determineWinner, 1000);
                }
            } else {
                player2Choice = selectedShape;
                setTimeout(determineWinner, 1000);
            }
        });
    });

    // Function to determine the winner of the round
    function determineWinner() {
        let result = "";

        // Display images of both players' elections when the winner is determined
        document.getElementById("player1ChoiceImage").src = `images/player1${capitalize(player1Choice)}.png`;
        document.getElementById("player1ChoiceImage").classList.remove('d-none');

        document.getElementById("player2ChoiceImage").src = `images/player2${capitalize(player2Choice)}.png`;
        document.getElementById("player2ChoiceImage").classList.remove('d-none');

        if (player1Choice === player2Choice) {
            result = "It's a Tie!";
        } else if (
            (player1Choice === "rock" && player2Choice === "scissors") ||
            (player1Choice === "paper" && player2Choice === "rock") ||
            (player1Choice === "scissors" && player2Choice === "paper")
        ) {
            result = `${player1Name} Wins the Round!`;
            player1Score++;
            currentRound++; 
        } else {
            result = `${player2Name} Wins the Round!`;
            player2Score++;
            currentRound++;
        }

        // Display the result on screen
        document.getElementById("turnInfo").textContent = result;

        // Update scoreboard
        document.getElementById("scoreBoard").textContent = `${player1Name}: ${player1Score} | ${player2Name}: ${player2Score}`;

        // Show next round button
        document.getElementById("nextRoundButton").classList.remove("d-none");

        // Disable selection buttons until the player presses ‘Next Round’
        document.querySelectorAll(".shape-button").forEach(button => {
            button.disabled = true;
        });

        // Hide the selection buttons
        document.querySelectorAll(".shape-button").forEach(button => {
            button.classList.add("d-none");
        });

        document.getElementById("selectShapeMessage").classList.add("d-none");

        // Check if there is already a winner before continuing
        if (player1Score > totalRounds / 2 || player2Score > totalRounds / 2) {
            endGame();
        }
    }

    // Button to advance to the next round
    document.getElementById("nextRoundButton").addEventListener(eventType, function () {
        if (currentRound <= totalRounds) {
            document.getElementById("roundInfo").textContent = `Round ${currentRound} of ${totalRounds}`;
            currentPlayerTurn = 1;
            resetRound();
        } else {
            endGame();
        }
    });

    // Restart for the next round
    function resetRound() {
        player1Choice = "";
        player2Choice = "";
        document.getElementById("player1ChoiceImage").classList.add("d-none");
        document.getElementById("player2ChoiceImage").classList.add("d-none");
        document.getElementById("turnInfo").textContent = `${player1Name}'s Turn`;

        document.querySelectorAll(".shape-button").forEach(button => {
            button.classList.remove("d-none");
            button.disabled = false;
        });

        document.getElementById("selectShapeMessage").classList.remove("d-none");

        document.getElementById("nextRoundButton").classList.add("d-none");
    }

    // Function to end the game
    function endGame() {
        document.getElementById("step-3").classList.add("d-none");
        document.getElementById("step-4").classList.remove("d-none");

        let finalMessage = "";
        if (player1Score > player2Score) {
            finalMessage = `Winner: ${player1Name}`;
        } else if (player2Score > player1Score) {
            finalMessage = `Winner: ${player2Name}`;
        } else {
            finalMessage = "It's a Tie!";
        }
        document.getElementById("winnerMessage").textContent = finalMessage;
    }

    // Auxiliary function to capitalise the first letter
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    // Button to play again
    document.getElementById("playAgainButton").addEventListener(eventType, function () {
        location.reload();
    });

    // Button to exit the game
    document.getElementById("quitButton").addEventListener(eventType, function () {
        location.reload();
    });
});


