console.log('spread syntax - array');

let a = [1, 2, 3];
let b = a;

console.log('a:', a);
console.log('b:', b);

a[1] = 200;

console.log('a:', a);
console.log('b:', b);

let c = a.slice();

console.log('c:', c);

c[2] = 300;

console.log('a:', a);
console.log('c:', c);

let d = [...a];

console.log('d:', d);

d[3] = 4;

console.log('d:', d);
console.log('a:', a);

let e = ['a', true, { id: 10, name: 'hari' }];

console.log('e:', e);

let f = ['bangalore', ...a, ...e, 'austin'];

console.log('f:', f);
