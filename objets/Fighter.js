class Fighter {
    #attackLevel;
    #defenceLevel;
    #healthLevel;

    #name;

    #interval

    constructor(name, attackLevel, defenceLevel, healthLevel) {
        this.#attackLevel = attackLevel;
        this.#defenceLevel = defenceLevel;
        this.#healthLevel = healthLevel;
        this.#name = name;
    }

    isDead () {
        return this.#healthLevel <= 0;
    }

    getName () {
        return this.#name;
    }

    takeDamage (val) {
        this.#healthLevel -= val;
        console.log(`${this.#name} dit ouch ! santé = ${this.#healthLevel}`);
    }

    fight (opponent) {
        if (!this.#interval) {
            this.#interval = setInterval(() => {
                this.attack(opponent);
            }, 500);
        }
    }

    attack (opponent) {
        console.log(`${this.#name} attaque ${opponent.getName()}`);
        let attackValue = this.#attackLevel + this.rollDice(10);
        opponent.defend(attackValue);
        if (!opponent.isDead()) {
            opponent.attack(this);
        } else {
            opponent.endFight();
            clearInterval(this.#interval);
            console.log(`${opponent.getName()} est mort`);
        }
    }


    endFight () {
        clearInterval(this.#interval);
    }

    defend (attackValue) {
        let defendValue = this.#defenceLevel + this.rollDice(10);
        let damage = attackValue - defendValue;
        if (damage > 0) {
            this.takeDamage(damage);
        } else {
            console.log(`${this.#name} dit : Même pas mal`)
        }
    }
    rollDice (n) {
        return Math.ceil(Math.random() * n);
    }


}

const bruceLee = new Fighter("Bruce Lee", 5, 8, 6);
const shreck = new Fighter("Shreck", 7, 3, 8);

bruceLee.fight(shreck);