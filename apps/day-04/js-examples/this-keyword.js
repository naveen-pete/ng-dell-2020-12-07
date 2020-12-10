console.log('this keyword');

function sayHi() {
  console.log('Hi, welcome to JS Examples');
  console.log('this:', this);
}

sayHi();

var c = {
  id: 10,
  name: 'naveen',
  city: 'bengaluru',

  show: function () {
    console.log('name:', this.name);
    console.log('city:', this.city);
    console.log('this:', this);
  }
};

// console.log('customer:', c);
c.show();
