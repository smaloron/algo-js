class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert (value) {
        const newNode = new Node(value);

        // Si l'arbre est vide
        if (this.root === null) {
            // Le nouveau noeud devient la racine
            this.root = newNode;
            return this;
        }
        // l'arbre n'est pas vide donc on va boucler sur l'arbre en partant de la racine
        let currentNode = this.root;

        while (true) {
            // La valeur à insérer existe dèjà dans l'arbre donc on ne fait rien
            if (currentNode.value === newNode.value) {
                return this;
            }

            if (currentNode.value < newNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }

    }

    find (value) {
        if (this.root === null) return null;

        let currentNode = this.root;
        let found = false;
        while (!found && currentNode) {
            if (currentNode.value == value) {
                found = true;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        if (!found) return null;
        return currentNode;
    }
}