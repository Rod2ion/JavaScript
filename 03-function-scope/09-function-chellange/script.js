function getCelsius(f) {
    const celsius = (f - 32) * 5 / 9;
    return celsius;


}

console.log(getCelsius(32));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Chellange 2

function minMax(arr) {

const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min,max);

return{
    min,
    max,
};

}
console.log(minMax([1,2,3,4,5]));

// Challange 3 
((length, width) => {
    const area = length * width;
    
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
    })(10, 5);