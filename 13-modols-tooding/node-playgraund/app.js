const message = require('./utils');
const Person = require('./person')
console.log(message);

const person1 = new Person('John', '28')
person1.greet();