// examining document object peoperties
let output;

output = document.all;
output = document.all.length;

console.log(output);

// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);

// set attributes
document.getElementById('app-title').id = 'new-id'

// create-element

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-elements';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World'
const text = document.createTextNode('hello world');
div.appendChild(text);


// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);


