// I do function in function 
function first(){
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

   second();
}

first();

// I do block in block

if(true){
    const x = 100;

    if(x === 100){
        const y = 200;
        console.log((x + y));
    }
}

