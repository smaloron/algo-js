function getMax (data) {
    let max = 0, maxIndex;
    for (var index in data) {
        if (max < data[index]) {
            max = data[index];
            maxIndex = index;
        }
    }

    return maxIndex;
}

function search (source, what) {
    for (let index in source) {
        if (source[index] == what) {
            return index;
        }
    }

    return -1;
}

const list = [5, 8, 9, 1, 6, 4, 12, 9, 0, 4];

console.log(getMax(list));