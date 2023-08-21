// ||= assigns the right side value side value only if the left is a falsy value

let a = null;

// if (!a) {
//     a = 10; 
// }

// a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 10;
if (b) {
    b = 20;
}
console.log(b);

// ??=assigns the right side value only if the left is null or underfined.

let c = null;

if(c === null || c === undefined){
    c = 30;
} // one variant

c = c ?? 40; // two variant 

c ??= 20; // three variant
console.log(c);