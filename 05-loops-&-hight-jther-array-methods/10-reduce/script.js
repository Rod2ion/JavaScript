const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce(function(accumulator, currentValue) {
return accumulator + currentValue;
}, 0 );
console.log(sum); // add all numbers in sum

const card = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 200},
];

const total = card.reduce(function(acc, product){
    return acc + product.price;
}, 0);
console.log(total); // show me all price 