// console.log(Math);
// console.log(Math.PI); // Output: 3.141592653589793
// console.log(Math.E);  // Output: 2.718281828459045
// console.log(Math.round(4.7)); // Output: 5
// console.log(Math.round(4.3)); // Output: 4
// console.log(Math.ceil(4.3));  // Output: 5
// console.log(Math.floor(4.7)); // Output: 4
// console.log(Math.max(1, 5, 3)); // Output: 5
// console.log(Math.min(1, 5, 3)); // Output: 1
// console.log(Math.random()); // Output: A random number between 0 and 1
// console.log(Math.random() * 10); // Output: A random number between 0 and 10
// console.log(Math.floor(Math.random() * 10)); // Output: A random integer between 0 and 9

console.log(Math.random());
console.log((Math.random() * 10)+1);
console.log(Math.floor(Math.random() * 10)+1);

const min=10
const max=20
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Output: A random integer between 10 and 20 (inclusive)