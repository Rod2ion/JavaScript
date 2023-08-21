let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin:true,
    address:{
        street:'Broniewiskiego 28a',
        city: 'Rzeszow',
        cauntry: 'Poland',
    },
    hobbies: ['music','programiring']

};

x = person.name; // show me name persone
x = person['age']; // show me age persone
x = person.hobbies[1]; // show me hobbies in ID 1 

person.name = 'Jane Doe'; // update name 
person['isAdmin'] = false; // update Admin status
delete person.age; // delete age in a persone 

person.hasChildren = true; // show in console line new info abaut has children or not

person.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

person.greet(); // this function halp me do a new line in a console and show my text 

x = person;

const person2 = {
    'first name': 'Bard',
    'last name': 'Traversy',
}

x = person2['first name']; // this a comands help me see a first name persone, but course wouldn't use this method

console.log(x);