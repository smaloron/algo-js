const books = [
    { title: 'Apprendre SQL avec MySQL', authors: ['Christian Soutou'], tags: ['Informatique', 'Base de données'], price: 25 },
    { title: 'Best practices PHP 5', authors: ['Guillaume Ponçon'], tags: ['Informatique', 'PHP'], price: 30 },
    { title: 'A Guide to SQL', authors: ['Philip Pratt', 'Mary Last'], tags: ['Informatique', 'Base de données'], price: 18 },
    { title: 'PHP/MySQL avec Dreamweaver 8', authors: ['Jean-Marie Defrance'], tags: ['Informatique', 'PHP', 'Base de données'], price: 25 },
    { title: 'Ajax, jQuery et PHP', authors: ['Jean-Marie Defrance'], tags: ['Informatique', 'PHP', 'jQuery', 'Ajax', 'Javascript'], price: 20 },
    { title: 'Le Colonel Chabert', authors: ['Honoré de Balzac'], tags: ['Roman', 'classique'], price: 10 },
    { title: 'JavaScript pour le Web 2.0', authors: ['Arnaud Gougeon', 'Thierry Templier'], tags: ['Informatique', 'Javascript'], price: 26 },
    { title: 'Botanique systématique des plantes à fleurs', authors: ['Daniel Jeanmonod', 'Murielle Figeat'], tags: ['Science', 'botanique'], price: 18 },
    { title: 'La Société des affects', authors: ['Frédéric Lordon'], tags: ['Science sociales'], price: 20 },
    { title: 'Les Quadratures de la politique économique', authors: ['Frédéric Lordon'], tags: ['Science politique'], price: 20 },
    { title: 'Eloge de l\'amour', authors: ['Nicolas Truong', 'Alain Badiou'], tags: ['Philosophie'], price: 10 },
    { title: 'Diagnostic de la performance de l\'entreprise', authors: ['Christophe Everaere', 'Alain Asquin', 'Alain Marion'], tags: ['Economie', 'Gestion'], price: 20 },
    { title: '100 fiches pour comprendre les sciences économiques', authors: ['Dominique Chamblay', 'Marc Montoussé'], tags: ['Economie'], price: 18 },
];

function getCell (value) {
    return `<td>${value}</td>`;
}

function getRow (book) {
    let html = "<tr>";
    html += getCell(book.title);
    html += getCell(book.authors.join(" - "));
    html += getCell(book.tags.join(", "));
    html += getCell(book.price);
    html += "</tr>";

    return html;
}

function getHeader () {
    let html = "<tr>";
    html += getCell("Titre");
    html += getCell("Auteurs");
    html += getCell("tags");
    html += getCell("prix");
    html += "</tr>";

    return html;
}

function getTable (bookList) {
    let html = "<table>";
    html += getHeader();
    for (book of bookList) {
        html += getRow(book);
    }
    html += "</table><hr>";
    return html;
}

const out = document.getElementById("out");

out.innerHTML = getTable(books);

out.innerHTML += getTable(
    books.filter((item) => item.price > 20)
);

out.innerHTML += getTable(
    books.filter((item) => item.tags.indexOf("Base de données") >= 0)
);

