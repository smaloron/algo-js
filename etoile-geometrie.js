let max = 5;
let line = "";

// Une ligne de n étoiles
for (i = 1; i <= max; i++) {
    line += "*";
}
console.log(line);

// un triangle rectangle
for (i = 1; i <= max; i++) {
    line = "";
    for (k = 1; k <= i; k++) {
        line += "*";
    }
    console.log(line);
}

// un triangle rectangle inversé
for (i = 1; i <= max; i++) {
    line = "";
    for (k = max - (i - 1); k > 0; k--) {
        line += "*";
    }
    console.log(line);
}

for (i = 1; i <= max; i++) {
    line = "";
    if (i == 1 || i == max) {
        for (k = 1; k <= max; k++) {
            line += "*";
        }
    } else {
        line = "*";
        for (k = 2; k < max; k++) {
            line += " ";
        }
        line += "*";
    }

    console.log(line);
}
