const personProto = {
    sayName () {
        console.log(this.name);
    }
}

function createPerson (name) {
    const person = Object.create(personProto);
    person.name = name;

    return person;
}

const person = createPerson('Gabriel');

//console.log(person);
//console.log(Object.getPrototypeOf(person));
//person.sayName();


function Person (name) {
    this.name = name;
}
Person.prototype = personProto;
const person2 = new Person('Gabriel');

console.log(Person.prototype);