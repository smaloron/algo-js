const list = ["Un frigidaire", "Un évier en fer", "Un raton laveur"];

let html = "<ul><li>" + list.join("</li><li>") + "</li></ul>"

// je veux obtenir maSuperVariable
const snakeCase = "ma_super_variable";

let t = snakeCase
    .split("_")
    .map((item, index) => {
        if (index == 0) {
            return item
        } else {
            return item.substring(0, 1).toUpperCase() +
                item.substring(1);
        }
    })
    .join("");

console.log(t);