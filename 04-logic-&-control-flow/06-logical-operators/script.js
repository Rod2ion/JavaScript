console.log(10 < 20 &&  30 > 15 && 40 > 30);
console.log(10> 20 || 30 < 15);

// && - Will return first falsy value or the last value

let a;
let b;
let c;
let d;

a = 10 && 20;
b = 10 && 20 && 30;
c = 10 && 0 && 30;
d = 10 && '' && 0 && 30;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// const posts = []; // show me a empti line in console 
const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

//  || - Will return the first truthy value or the last value

let e;
let f;
let g;

e = 10 || 20;
f = 0 || 20;
g = 0 || null || '' || undefined;

console.log(e);
console.log(f);
console.log(g);

// Returns the right side operand when the left is null or underfined 
let h;
let i;
let j;
let k;
let l;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);