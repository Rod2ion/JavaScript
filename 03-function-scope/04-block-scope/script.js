const x = 100;
const foo = 1;
var bar = 2;

if(true){
    const y = 200;
    console.log(x + y);
}

for(let i = 0; i <= 10; i++){
    console.log(i); // show me in console numbers from 0 to 10 
}

if (true) {
    const a =500;
    let b = 600;
    var c = 700;
}

// console.log(a); // Show me error because const in the block
// console.log(b); // Show me error because let in the block
console.log(c); // Don't show me error because var can be in the blocl

function run(){
    var d = 100;
    console.log(d);
}

run();




