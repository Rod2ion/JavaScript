let x; 
let d = new Date();

x = d.toString();

x = d.getTime(); // show many numbers (I don't understand what is this numbers)
x= d.valueOf();

x = d.getFullYear(); // show me a year right now 
x= d.getDate(); // show me a date today 
x = d.getDay(); // show me a day (thusday) 3 day in the week
x = d.getHours(); // show me a time at the moment 
x = d.getSeconds(); // show me a seconds right now 
// I can do this in a year, day, date, month, hover, minuts, seconds

x = d.getMonth();
x = d.getMonth() +1; // If i have write month

x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDay()}` // I wite a year a month and a day today

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d); // Show you your month
x = d.toLocaleString('default', {month: 'short'}); // Show you your month short but is can't work in my laptop XDDDDDD because i use to russian language and this manth is a short XDDDDDDD



console.log(x);