let x;
const name = 'Jone';
const age = 30;

x = 'Hello, my name is ' + name + 'and I am ' + age + ' years old'; // Show my sentence in console

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`; // It's work like a 5 line, but short writing

// String Properties and Metgods 

const s = new String('Hello world');

x = typeof s;

 x = s.length; // This function world caunt. Np: Hello world have 10 liters and 1 is a spacja

//  Access value by key
 x = s[1];

 x = s.__proto__; // Show me text: String {'Hello wordl'}, liters and h1 e2 l3 l4 itp. if i write in console s but if i 
// write a console x, show me comads

x= s.toUpperCase(); // write to Uper case Np. HELLO WORLD
x= s.toLowerCase(); // write to Lower case Np. hello world

x = s.charAt(1); // Show me a first liters in word if i write 0 show me: H if i write 1 show me: e

x = s.indexOf('H'); // show me number in the word: h show me 0, e show me 1 itd

x = s.substring(0,7); // show me text from 0 to over word, so if i write 0,4 console write me Hello w
x = s.substring(7); // show me text from 7 liters so show me orld 

x = s.slice(-7); // show me text form the end, so show me 0 world

x = '            Hello world';

x = s.trim(); // text write the text from the beginning of the line

x = s.replace('World', 'Jone');

x = s.includes('world') // told me a false or true is liters or word in this sentence

x = s.valueOf();

x = s.split(); // this do or 'h', 'e', 'l' or if have space 'Hello','word' or if not space write like this ['Hello word']

console.log(x);
