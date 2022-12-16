const maze = [
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0]
];

function isValid (maze, row, col) {
    return row >= 0 && row < maze.length
        && col >= 0 && col < maze.length
        && maze[row][col] == 0;
}

function exitMaze (maze, row = 0, col = 0, solution = []) {

    // Condition de sortie
    if (row === maze.length - 1 && col === maze.length - 1) {
        solution.push([row, col]);
        return true;
    }

    // Test de la contrainte
    if (isValid(maze, row, col)) {

        // Ajout à la solution
        solution.push([row, col]);

        // Appels récursif pour explorer tous les choix
        if (exitMaze(maze, row, col + 1, solution)) return true;
        if (exitMaze(maze, row + 1, col, solution)) return true;

        // Revenir sur ses pas backtrack
        solution.pop();
        return false;
    }

}
const sol = []
exitMaze(maze, 0, 0, sol);
console.log(sol);



