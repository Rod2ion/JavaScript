let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueeberry', 'rasberry'];

fruits.push(berries);

x = fruits[3][1]; 

const allFruits = [fruits, berries];
x = allFruits [1] [0]; // Okey so fruts have Id 0 and a berries have ID 1, so ID 1 and ID 0 its Strawberry


// Spread Operator(...)

x = [... fruits, ...berries]; // show me all, I wont to say show me all fruits and berries

// Flaten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8]; // [] this write a one line 

x = arr.flat();

// console.log(arr);

// Static Methods an Array Objects

x = Array.isArray('apple'); // Search and write me true or false, 

x = Array.from('123456789'); // Show me a console this numbers  1 2 3 4 5 6 7 8 9

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c); // show me in colnsole  1 2 3 

console.log(x);
