// string

const firstName = 'Sara';
// console.log(string, typeof string);


// number

const age = 30;
const temp = 98.8;

// boolean

const hasKids = true;
// null

const aptNumber = null;

// underfined

// let score;
const score = undefined;

// symbol 

const id = Symbol('id')

// bigint

const n = 48351836413545n;


//  refrence types

const numbers =[1,2,3,4,5,6] ;
const person = {
    name: 'Brad',

};

function sayHello(){
    console.log('Hello');
};
const output = sayHello;

console.log(output, typeof output);