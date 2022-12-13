
function iterativeSearch (source, what) {
    let start = 0;
    let end = source.length - 1;

    while (start <= end) {
        // Le centre de l'intervalle
        let middle = Math.floor((start + end) / 2);

        // test de la valeur au centre
        if (source[middle] == what) {
            return middle;
        } else if (source[middle] < what) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

function recursiveSearch (source, what, start, end) {
    // cas de sortie
    if (start >= end) return -1;

    // Calcul du pivot
    let middle = Math.floor((end + start) / 2);

    console.log(middle, source[middle]);

    // Eureka
    if (source[middle] == what) return middle;

    // Appel récursif en divisant la population par 2
    if (source[middle] > what) {
        return recursiveSearch(source, what, start, middle - 1);
    } else {
        return recursiveSearch(source, what, middle + 1, end);
    }
}


const list = [];

for (let i = 1; i <= 100; i++) {
    list.push(i);
}

console.log(list);

console.time("algo itératif");
console.log(iterativeSearch(list, 48));
console.timeEnd("algo itératif");

console.time("algo récursif");
console.log(recursiveSearch(list, 48, 0, list.length - 1));
console.timeEnd("algo récursif");