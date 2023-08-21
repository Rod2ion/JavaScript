const sym = Symbol()
const sym1 = Symbol('foo')
const sym2 = Symbol('bar') // show me all symbol in console

console.log(sym,sym1,sym2);
console.log(typeof sym); // show me only symbol
console.log(sym.description); // show me text in symbol, in this przykład not text
console.log(sym1.description); // show me foo 


// Symbols are unique
console.log(Symbol('sum') === Symbol('sym')); // write me false

const user = {
    [Symbol('id')]: 1,
    name: 'John Doe',
    email: 'john@gmail.com'
};

user.id = 2;

console.log(user['name']);// write me John Doe

// Symbols are NOT enumerable

console.log(Object.keys(user));
console.log(Object.values(user));

for(let key in user){
    console.log(key);
}

// getOwnPropertySymbols

console.log(Object.getOwnPropertySymbols(user));