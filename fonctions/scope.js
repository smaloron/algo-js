let global = "je suis globale";

function test () {
    let local = "Je suis locale";
    console.log(global);
    console.log(local);

    for (var i = 0; i <= 10; i++) { }
    console.log(i);
}


test();

//console.log(local);