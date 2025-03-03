const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");

document.body.innerHTML = `
    <div>
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
    </div>
`;

document.getElementById("numPlayers").addEventListener("change", function () {
    const playerCountValue = this.value;
    const player1Section = document.getElementById("player1Section");
    const player2Section = document.getElementById("player2Section");
    
    if (playerCountValue === "1") {
        player1Section.classList.remove("d-none");
        player2Section.classList.add("d-none");
    } else if (playerCountValue === "2") {
        player1Section.classList.remove("d-none");
        player2Section.classList.remove("d-none");
    }
});

document.getElementById("nextButton").addEventListener("click", function () {
    const playerCount = document.getElementById("numPlayers");
    const errorMessage = document.getElementById("errorMessage");

    if (!playerCount.value) {
        errorMessage.textContent = "Please select the number of players.";
    } else {
        errorMessage.textContent = "";
    }
});

// Test to verify that the error message is displayed if the number of players is not selected
test("It should display an error message if the number of players is not selected", () => {
    const nextButton = document.getElementById("nextButton");
    const errorMessage = document.getElementById("errorMessage");

    // Pretend that nothing has been selected and click on the Next button
    fireEvent.click(nextButton);

    // Checks if the error message appears
    expect(errorMessage.textContent).toBe("Please select the number of players.");
});

