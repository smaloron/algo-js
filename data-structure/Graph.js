class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge (v1, v2, distance) {
        this.adjacencyList[v1].push({ node: v2, distance });
        this.adjacencyList[v2].push({ node: v1, distance });
    }

    removeEdge (vertex1, vertex2) {

        // Filtre pour ne conserver que les connexions qui ne concernent pas 
        // le sommet vertex2 sur le sommet vertex1
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
            .filter(v => v.node !== vertex2);

        // Filtre pour ne conserver que les connexions qui ne concernent pas 
        // le sommet vertex1 sur le sommet vertex2
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v.node !== vertex1);
    }

    removeVertex (vertex) {
        // Suppression de toutes les connexion du sommet
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // Suppression du vecteur
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph();
graph.addVertex("Paris");
graph.addVertex("Poitiers");
graph.addVertex("Futuroscope");
graph.addEdge("Paris", "Poitiers", 250);
graph.addEdge("Futuroscope", "Poitiers", 15);

console.log(graph.adjacencyList);