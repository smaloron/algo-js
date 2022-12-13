const person = {
    name: 'Joe Smith',
    job: 'Graphiste',
    greet: function () {
        console.log('Hello ' + this.name)
    },
    newGreet: () => console.log('Hi ' + this.name),
    changeName: function (newName) {
        this.name = newName;
    }
}

person2 = {
    name: 'Aliénor d\'Aquitaine',
    job: 'Reine',
    wesh: person.greet
}

//person2.prototype.halo = person.greet;

person.changeName('Jane Doe');
person.greet();
person.newGreet();

const p = person;
p.changeName('Gandalf');

person.greet();