class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * Ajout d'un élément en tête de liste
     * @param {*} value 
     */
    push (value) {
        // Création du nouvel élément
        const newItem = new Node(value);
        // Si la liste est vide
        if (this.head == null) {
            // la queue de la liste est le nouvel élement
            this.tail = newItem;
        } else {
            // l'ancienne tête de liste pointe vers le nouvel élément
            this.head.next = newItem;
        }

        // Le tête est le nouve élément
        this.head = newItem;
        // La taille est augmentée
        this.size++;

        return this;
    }

    /**
     * Supprime l'élément en tête de liste
     * retourne l'élément supprimé
     */
    pop () {
        // Si la liste est vide on retourne null
        if (!this.head) return null;

        // stockage du noeud de tête
        const removedHead = this.head;

        // Je veux trouver l'avant dernier élément de la liste (celui dont la propriété next est égal à la propriété head de la liste)
        let currentNode = this.tail;
        while (currentNode.next) {
            if (currentNode.next == this.head) {
                currentNode.next = null;
                this.head = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }

        this.size--;
        return removedHead;
    }
}



const list = new LinkedList();

list.push(7).push(3).push(8).push(4);

console.log(list);

console.log(list.pop());

console.log(list);

