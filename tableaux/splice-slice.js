const t = [
    "Jean",
    "Pierre",
    "Guy",
    "Siobhan",
    "Moufida",
    "Claudia"
];

// slice découpe un tableau
const t2 = t.slice(3).concat(t.slice(0, 3));
console.log(t2);

// splice
// suppression, insertion, remplacement

// suppression
t.splice(3, 1);



// insertion
t.splice(3, 0, "Paul", "Carmen");

// remplacement
t.splice(1, 1, "Severn");

console.log(t);