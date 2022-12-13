const fruits = ["pommes", "poires", "oranges"];

console.log(fruits.indexOf("poires"));

console.log(
    fruits.findIndex((item) => {
        return item == "oranges"
    })
);

const notes = [12, 18, 5, 9, 20];

console.log(
    notes.sort((a, b) => b - a)
);



console.log(
    notes.filter(function (item) {
        return item >= 10
    })
);

console.log(
    notes.filter(item => item >= 10)
);

console.log(
    notes.map(item => Math.min(item + 5, 20))
);