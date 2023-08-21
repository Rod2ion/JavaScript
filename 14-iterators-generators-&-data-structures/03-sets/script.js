const set = new Set([1,2,3,4]);  // nie pozwala robić dublikatów w konsoli

console.log(set);
const iterator = set.values()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());