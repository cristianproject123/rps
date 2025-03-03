const { determineRoundWinner } = require("../src/functions");

test("Must correctly determine the winner of the round", () => {
    expect(determineRoundWinner("rock", "scissors")).toBe("player1"); // Rock beats scissors
    expect(determineRoundWinner("paper", "rock")).toBe("player1");    // Paper beats Rock
    expect(determineRoundWinner("scissors", "paper")).toBe("player1");// Scissors beats Paper
    expect(determineRoundWinner("rock", "rock")).toBe("Draw");      // Same selection = draw
});
