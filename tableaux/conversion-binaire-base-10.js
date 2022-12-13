const binaryNumber = "110";

// Version courte
// un split suivi d'un map et d'un reduce
const result = binaryNumber
    .split("")
    .map((item, index, source) => {
        if (item === "0") {
            return 0;
        } else {
            return 2 ** (source.length - 1 - index);
        }
    })
    .reduce((acc, val) => acc + val);


console.log(result);

// Autre solution plus classique

// Découpage de la chaîne dans un tableau
const bitTable = binaryNumber.split("");
const maxExponent = bitTable.length - 1;
let decimalNumber = 0;
for (let index in bitTable) {
    // Si le bit est à 1 on ajoute sa puissance de deux
    if (bitTable[index] === "1") {
        decimalNumber += 2 ** (maxExponent - index);
    }
}

console.log(decimalNumber);

