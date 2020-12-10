console.log('variables - var, let, const');

// ES5 or earlier
// var a = 10;   // global

// ES6
const a = 10;

console.log('a:', a);   // 10

// if(condition) / for / while
// function someFn() 
{
  const a = 20;   // function

  console.log('a:', a);   // 20
}

// someFn();

console.log('a:', a);   // 20

// ES5 - Variable scope
// 1. global scope   - var
// 2. function scope - var

// ES6
// 3. block-level scope - let / const