const input = "toto @moi.com";
let hasSpace = false;
let hasOneEmpersand = false;
let hasDot = false;
let c;
for (let index of input) {
    c = input.charAt(index);
    if (c == " ") {
        hasSpace = true;
        break;
    }

    if (c == "@" && !hasOneEmpersand) {
        hasOneEmpersand = true;
    } else if (c == "@") {
        hasOneEmpersand = false;
        break;
    }

    if (c == "." && index > 0) {
        hasDot = true;
    }
}

console.log(
    !hasSpace && hasOneEmpersand && hasDot
);