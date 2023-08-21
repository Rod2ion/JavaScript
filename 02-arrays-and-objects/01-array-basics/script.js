let x;
// Array Literal
const numbers = [12, 45, 65, 75, 46]; // Show me liters 12 - 0 45 - 1 i td
console.log(numbers);

const mixed = [12, 'hi', true, null]; // I can write  words
console.log(mixed);

// Array Constructor
const fruits = new Array('apple' , 'grape', 'orange');
console.log(fruits);

x = numbers[0]; // Show me 12 because 12 has a 0 ID 

x = numbers[0] + numbers[3]; // Sume 12 + 75 

x = `My favorite fruit is an ${fruits[0]}` // I must to use ID fruits, so Id apple is 0, grape is 1 itd

x = numbers.length; // caunt Id, I have 5 numbers so console show me 5

fruits[2] = 'pear';
x = fruits; // this function change name 

// fruits.length = 2; // show me two fruits because if i write 2 console show me apple and grape

fruits[3] = 'strawerry'; // Add new fruit

fruits[fruits.length] = 'bluberry'; // This too add new fruit

x = fruits;
console.log(x);
