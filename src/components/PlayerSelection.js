export function PlayerSelection() {
    const container = document.createElement("div");
    container.innerHTML = `
        <label for="numPlayers">Select number of players:</label>
        <select id="numPlayers">
            <option value="">Select</option>
            <option value="1">1 Player</option>
            <option value="2">2 Players</option>
        </select>

        <div id="player1Section" class="d-none">
            <input type="text" id="player1Name" placeholder="Name Player 1" />
        </div>
        <div id="player2Section" class="d-none">
            <input type="text" id="player2Name" placeholder="Name Player 2" />
        </div>

        <button id="nextButton">Next</button>
        <p id="errorMessage"></p>
    `;

    const playerCount = container.querySelector("#numPlayers");
    const player1Section = container.querySelector("#player1Section");
    const player2Section = container.querySelector("#player2Section");
    const nextButton = container.querySelector("#nextButton");
    const errorMessage = container.querySelector("#errorMessage");

    // Show or hide the sections according to the number of players selected
    playerCount.addEventListener("change", function () {
        const playerCountValue = this.value;

        if (playerCountValue === "1") {
            player1Section.classList.remove("d-none");
            player2Section.classList.add("d-none");
        } else if (playerCountValue === "2") {
            player1Section.classList.remove("d-none");
            player2Section.classList.remove("d-none");
        }
    });

    // Logic for the ‘Next’ button
    nextButton.addEventListener("click", function () {
        const selectedPlayer = playerCount.value;

        if (!selectedPlayer) {
            errorMessage.textContent = "Please select the number of players."; // Display error message
        } else {
            errorMessage.textContent = "";
        }
    });

    return container;
}

