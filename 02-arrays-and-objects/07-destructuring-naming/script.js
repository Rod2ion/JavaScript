// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
};

const {id, title} = todo; // show me ID and title 

console.log(id, title);

const numbers = [25, 78, 45, 86];

// const [first, second] = numbers; // show me first(25) and second(78) number
const [first, second, ...rest] = numbers; // show me first(25) and second(78) number and the rest numbers



console.log(first, second, rest);
