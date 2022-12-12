const input = "456A";
isNumber = true;

for (let index in input) {
    let charCode = input.charCodeAt(index);
    if (charCode < 48 || charCode > 57) {
        isNumber = false;
        break;
    }
}

console.log(isNumber);