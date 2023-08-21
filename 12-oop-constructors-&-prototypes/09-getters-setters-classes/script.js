class Person {
    constructor(fistName, lastName){
        this.fistName = fistName;
        this.lastName = lastName;
    }
}

const Person1 = new Person('John', 'Doe');
console.log(Person1.fistName);