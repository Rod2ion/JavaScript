let x;
const arr = [45, 3, 84, 48, 42];

 x  = arr.push(100); // Add new number 100 

 arr.pop() // Delite this new number ::( so pop delite a last numer

 arr.unshift(99) // Add new first number 99

 arr.shift() // 99 is gone so shift dalite a fist number

//  arr.reverse() // This comand reverse numbers so now its a 42 48 84 3 45 and original is 45 3 84 48 42


 x = arr.includes(84); // This show you true or false number is 2 line

 x = arr. indexOf(45); // show me Id number 45, but console show me 4 because I use to reverse comand

 x = arr.slice(2 , 5); // show me of number 84 because 84 have Id 2 and can show me numbers np 2 form 5 and more ofcorse
// and this not a change arr if I write in console x,arr i can see stock arr

// x = arr.splice(1, 4); // If I use this comand i see the same in 19 line but if i write in console log arr, i can see Id 0 

x = arr.splice(1,4).reverse().toString(); // Reverse and show me number Id 1 to 4 and no brackets 

console.log(x); 