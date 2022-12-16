Array.prototype.swap = function (a, b) {
    const temp = this[a];
    this[a] = this[b];
    this[b] = temp;
    return this;
}

function bubbleSort (source) {
    for (i = source.length; i > 0; i--) {
        for (k = 0; k < i - 1; k++) {
            if (source[k] > source[k + 1]) {
                source.swap(k, k + 1);
            }
        }
    }
    return this;
}

function enhancedBubbleSort (source) {
    let noswaps;
    for (i = source.length; i > 0; i--) {
        noswaps = true;
        for (k = 0; k < i - 1; k++) {
            if (source[k] > source[k + 1]) {
                source.swap(k, k + 1);
                noswaps = false;
            }
        }
        if (noswaps) break;
    }
    return this;
}


const t = new Array(10000)
    .fill(0)
    .map(() => Math.ceil(Math.random() * 100));


// const t = [1, 2, 3, 6, 5, 8, 7, 9, 10, 11, 12, 13, 14, 15];

const t2 = t.map(item => item);

//console.log(t);


console.time("bubble sort");
bubbleSort(t);
console.timeEnd("bubble sort");


console.time("bubble sort amélioré");
enhancedBubbleSort(t2);
console.timeEnd("bubble sort amélioré");

//console.log(t);
