function functionOne() {
    return Math.random() * 10;
}

function functionTwo(a, b) {
    if (a === b) {
        return "Draw";
    }
    return `${a}${b}`;
}

function determineRoundWinner(player1, player2) {
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (player1 === player2) return "Draw";
    return rules[player1] === player2 ? "player1" : "player2";
}

module.exports = { functionOne, functionTwo, determineRoundWinner };
