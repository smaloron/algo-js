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

class Rainbow {
    #colorList = [];

    constructor(colorList = []) {
        this.#colorList = colorList;
    }

    addColor (myColor) {
        if (myColor instanceof Color) {
            this.#colorList.push(myColor);
        }
        return this;
    }

    #getStripe (color) {
        return `<div style="background-color:"#${color.getHex()}"></div>`;
    }

    show () {
        return this.#colorList.map(item => this.#getStripe(item)).join("");
    }

    showAlt () {
        html = "";
        for (let c of this.#colorList) {
            html += this.#getStripe(c);
        }
        return html;
    }
}

const red = new Color(240, 59, 16);

red.blue = 24;
console.log(red.getBlue());

red.addBlue(14).addRed(5).addGreen(20);
console.log(red.getHex());

const rainbow = new Rainbow([new Color(16, 120, 50)]);
rainbow
    .addColor(new Color(90, 50, 200))
    .addColor(new Color(37, 80, 140));

console.log(rainbow.show());

