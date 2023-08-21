// window.alert('Hello');
// console.log(window.innerWidth); // show me Hello if i run to website and if i click okey, show me width my website

const x = 100;

console.log(x, 'in global');

function run(params) {
    console.log(window.innerHeight, window.innerWidth); // this function show me hight and width together console 
    console.log(x, 'in function');
}
run();

if (true) {
    console.log(x, 'in block');
}

function add(){
    const y = 50;
    console.log(y); 
    // console.log(y + x); // I can add x to my function 
}
add();