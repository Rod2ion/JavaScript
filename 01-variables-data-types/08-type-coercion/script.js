let x;

x = 5 + '5'; // If i do  5+ '5' = 55

x = 5 + Number('5'); // If i do 5 + Number('5') = 5 

x = 5 * '5'; 

x = 5 + null; // It look like 5 + 0 

x= Number(null); 

x = Number(false); // false is a number 0 and true is number 1

x= 5 + true; // because true is 1 so 5 + 1 = 6 



console.log(x, typeof x);