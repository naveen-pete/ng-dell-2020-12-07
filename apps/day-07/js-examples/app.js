console.log('spread syntax - object');

// Object.assign({}, product);

let a = {
  id: 10,
  name: 'krish'
};

let b = {
  ...a
};

console.log('a:', a);
console.log('b:', b);

b.city = 'bengaluru';

console.log('a:', a);
console.log('b:', b);

let c = {
  ...a,
  salary: 20000
}

console.log('c:', c);