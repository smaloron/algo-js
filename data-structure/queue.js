class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue (value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
        } else {
            this.last.next = newNode;
        }
        this.size++;
        this.last = newNode;

        return this;
    }

    dequeue () {
        if (!this.first) return null;
        const removedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return removedNode;
    }
}