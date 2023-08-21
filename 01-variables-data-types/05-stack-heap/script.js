// Valuses are stored on the stack 
const name = 'John';
const age = 30;

// Reference values are stpred on the heap 

const person = {
    name: 'Bard',
    age: 40
}

let newName = name;
newName = 'Jonathan';

let newPersone = person;
newPersone.name = 'Bradley';


console.log(name, newName);
console.log(person, newPersone);