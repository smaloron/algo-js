
function hello () {
    console.log("hello");
}

setTimeout(hello, 2000);

let timer = setInterval(() => {
    d = new Date();
    console.log(d.getTime())
}, 500);

setTimeout(() => {
    clearInterval(timer);
}, 3000)