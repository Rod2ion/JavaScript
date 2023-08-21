// loop through arrays

const items = ['Book', 'Table', 'chair', 'kite'];
const users = [
    {name: 'Bard'},
    {name: 'Kate'},
    {name: 'Steve'}
];

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
    
// }

for(const user of users){
    console.log(user.name);
}

//  loop over strings

const str = 'Hello world'; // show me hello wordl like this h e 2x l o  w o r d in a console

for(const letter of str){
    console.log(letter);
}


// loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('lastname', 'Jonsoniuk');
map.set('age', '30');

for(const [key, value] of map){
    console.log(key, value);
}