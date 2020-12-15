console.log('destructuring');

// object destructuring
const user = {
  id: 42,
  is_verified: true
};

// const id = user.id;
// const is_verified = user.is_verified;

// destructuring - object literal syntax 
const { id, is_verified } = user;

console.log('id:', id); // 42
console.log('is_verified:', is_verified); // true

// array destructuring
const foo = ['one', 'two', 'three'];

// const red = foo[0];
// const yellow = foo[1];
// const green = foo[2];

const [red, yellow, green] = foo;

console.log('red:', red); // "one"
console.log('yellow:', yellow); // "two"
console.log('green:', green); // "three"

// [] - array
// {} - object