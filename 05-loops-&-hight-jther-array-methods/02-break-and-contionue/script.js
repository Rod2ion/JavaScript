// Break 
for (let i = 0; i <= 20; i++) { // If i more then 15 console break other numbers
    if(i === 15){
        console.log('Breaking...');
        break;
    }
    console.log(i);
    
}

// Continue

for (let i = 0; i <= 20; i++){ // omija jedna liczbe

    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}