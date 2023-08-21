// for ([initialExpression]; [conditionExpression]; [incrementExpresion]) statement;

// INITIAL EXPRESSION - Initializes a variable/counter
// Condiotion Expression - Condiotion that the loop will continue to run as long as it is met or until the condiotion is false
// Increment Expresion - expresion than will be executed after each iteration of the loop. Usually increments the variable.
// Statement - code that will be executed each time the loop is run. To execute a  `block` of code, use the `{}` syntax

// for(let i = 0; i <= 12; i++){
//     if (i === 7) {
//         console.log('7 is my lucki number');
//     }
//     console.log('Number ' + i);
// }

// // Nest Loops

// for(let i = 1; i <= 10; i++){
//     console.log('Number' + i);
//     for(let j =1; j <= 10; j++){
//         console.log(`${j} * ${j} = ${i * j}`);
//     }
// }

// Loop thriugh an array

const names = ['Bard', 'Sam', 'Sara', 'John', 'Tim' ];
    for (let i = 0; i < names.length; i++) {

        if(i === 2){
            console.log(names[i] + ' is the best');
        }else{
            console.log(names[i]);
        }


        
    }
