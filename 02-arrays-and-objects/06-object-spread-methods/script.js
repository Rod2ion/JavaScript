let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.complited = false;
x = todo;

const persone = {
    address: {
        coords: {
            lat: 45.3483,
            lng: -58.34834,
        },
    },
};

x = persone.address.coords.lat; // search a my lat

const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d:4};

const obj3 = {obj1, obj2}; // show me abj1: {...}, obj2: {...}
const obj4 = {... obj1, ... obj2}; // show me a number like a normal line a: 1 itd

x = obj3; // i must use clg(x) but i use obj3 so that I can see what's going on

console.log(obj3);

console.log(obj4);

const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Buy Egg'},
    {id: 3, name: 'Take out trash '},
];

x = todos; //[0].name; This function [0].name, show me Id column and name

x = Object.keys(todo); // show me id name complited because its a kays

x = Object.values(todo); // show me 1 buy milk and false because its values

x = Object.entries(todo); // show me all !!!!!!!!!!!!!!!!!!!!!

x = todo.hasOwnProperty('id'); // show me a kay id in todo, if I have search name console show me true or false, isn't name in todo or not

console.log(x);