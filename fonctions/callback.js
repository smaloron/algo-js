function add (n1, n2, callback) {
    callback(n1 + n2);
}

add(5, 6, function (s) {
    console.log("....." + s + "......")
});

// Currying
function sum (a, b) {
    return a + b;
}

function add5 (n) {
    return sum(5, n);
}

// Factory

function greetingFactory (greetingWord) {
    return function (name) {
        return greetingWord + " " + name;
    }
}

const greetInFrench = greetingFactory("Bonjour");
const greetInSpanish = greetingFactory("Hola");