Array.prototype.swap = function (a, b) {
    const temp = this[a];
    this[a] = this[b];
    this[b] = temp;
    return this;
}

function pivot (data, start = 0, end = data.length - 1) {
    // Le pivot est le premier élément 
    let pivot = data[start];
    let swapIndex = start;
    for (i = start + 1; i <= end; i++) {
        if (pivot > data[i]) {
            swapIndex++;
            data.swap(swapIndex, i);
        }
    }

    data.swap(start, swapIndex);

    return swapIndex;
}

function quickSort (data, left = 0, right = data.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(data, left, right);
        quickSort(data, left, pivotIndex - 1);
        quickSort(data, pivotIndex + 1, right);
    }
    return data;
}

//const t = [6, 3, 9, 2, 1, 23];

const t = new Array(10000)
    .fill(0)
    .map(() => Math.ceil(Math.random() * 100));

console.time("quicksort");
quickSort(t);
console.timeEnd("quicksort");