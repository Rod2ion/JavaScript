let d;

d = new Date();

d = d.toString();

d = new Date(2021, 9, 15, 12, 55, 59); // the first is year, month, date, hower, minuts, seconds

d = new Date('2007-01-28 15:54:24');// or I can do like this 

d = new Date('12/10/2021 12:30:00'); // I can do like this the first a manth, date, year, howr, minuts, seconds

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = Math.floor(Date.now() / 1000);


console.log(d)