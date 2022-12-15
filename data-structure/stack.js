class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push (value) {
        // Instanciation d'un nouveau noeud
        const newItem = new Node(value);
        // L'élément précédent du nouveau noeud est l'ancien sommet de la pile
        newItem.previous = this.top;
        // le nouveau sommet est le nouvel élément
        this.top = newItem;
        this.size++;

        return this;
    }

    pop () {
        if (!this.top) return null;
        const removedNode = this.top;
        this.top = this.top.previous;
        this.size--;
        return removedNode;
    }

}


const pile = new Stack();
pile.push(2).push(1).push(9);

console.log(pile);

console.log(pile.pop());


console.log(pile);




