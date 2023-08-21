const d = new Date();
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
    console.log('Good Morning');
} 
else if(hour <18 ){
console.log('Good Afternoon');
}
else{
    console.log('Good Night');
}

// Nested If 

if( hour < 12){
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake Up!');
    }
} 
else if(hour <18 ){
console.log('Good Afternoon');
}
else{
    console.log('Good Night');

    if (hour >= 23) {
        console.log('zzzzzzzz');
    }
}
