class RPS_Game {
    constructor() {
        this.players = [];
    }

    addPlayer(name) {
        this.players.push({ name, score: 0 });
    }
}

module.exports = { RPS_Game };


