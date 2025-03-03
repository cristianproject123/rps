class Player {
    constructor(name) {
        this.name = name;
        this.shape = null;
    }

    chooseShape(shape) {
        this.shape = shape;
    }
}

module.exports = { Player };

