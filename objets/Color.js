class Color {

    #red;
    #green;
    #blue;
    constructor(red, green, blue) {
        this.#red = red;
        this.#green = green;
        this.#blue = blue;
    }

    getBlue () {
        return this.#blue;
    }

    // Retourne la couleur au format hexadécimal
    getHex () {
        return (
            this.#red.toString(16).padStart(2, '0') +
            this.#green.toString(16).padStart(2, '0') +
            this.#blue.toString(16).padStart(2, '0')
        ).toUpperCase()
    }

    addRed (value) {
        this.#red = Math.min(this.#red + value, 255);
        return this;
    }

    addGreen (value) {
        this.#green = Math.min(this.#green + value, 255);
        return this;
    }

    addBlue (value) {
        this.#blue = Math.min(this.#blue + value, 255);
        return this;
    }
}

const red = new Color(240, 59, 16);

red.blue = 24;
console.log(red.getBlue());

red.addBlue(14).addRed(5).addGreen(20);
console.log(red.getHex());