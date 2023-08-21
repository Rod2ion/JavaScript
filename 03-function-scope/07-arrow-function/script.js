// function add(a, b){
//     return a + b; 
// }

// Arraw functiuon syntax
const add = (a,b) => {
    return a + b;
}
console.log(add(1,2));

// Implicit Return 
const subtract = (a, b) => a-b;
console.log(subtract(10, 5));

// Can leave off () with a single param
const double = (a) => a * 2;
console.log(double(10));

// Returning an object 
const createObj = () => ({
    name: 'Bard',
});
console.log(createObj());

const numbers = [1,2,3,4,5];
numbers.forEach(function (n){
    console.log(n);
}) // Show me a numbers in the console 

// Arrow function in a collback
numbers.forEach(n => console.log(n)); // It's a decond way 


