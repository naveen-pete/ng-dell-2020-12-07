console.log('functions');

// ES5 - function statement syntax
// function sum(a, b) {
//   return a + b;
// }

// ES5 - function expression syntax
// anonymous function
// const sum = function (a, b) {
//   return a + b;
// };

// ES6 - arrow functions #1 (similar to lambda expressions)
// const sum = (a, b) => {
//   return a + b;
// };

// ES6 - arrow functions #2
const sum = (a, b) => a + b;

// ES6 - arrow functions #3
const square = x => x * x;

// ES6 - arrow functions #4
const sayHi = () => console.log('hi');

let result = sum(10, 40);
console.log('sum:', result);

console.log('square:', square(4));

sayHi();