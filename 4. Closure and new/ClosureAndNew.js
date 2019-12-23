"use strict"

//1. What is the code execution result

function User(name) {
    this.name = name;
}
  
let user = new User("John");
  
console.log(user.name);

//a. true
//b. John
//c. undefined
//d. null



//2. What is the code execution result

function User(name) {
    this.name = name;

    return {};
}
  
let user = new User("John");
  
console.log(user.name);

//a. true
//b. John
//c. undefined
//d. null



//3. What is the code execution result

function User(name) {
    this.name = name;

    return undefined;
}
  
let user = new User("John");
  
console.log(user.name);

//a. true
//b. John
//c. undefined
//d. null



//4. What is the code execution result

let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log(a === b);

//a. true
//b. false
//c. undefined
//d. null



//5. What is the code execution result
function Friend(name) {
    this.name = name;

    this.greeting = function() {
      console.log( "Hi, my name is " + this.name );
    };
}

let friend = new Friend("John");
  
friend.greeting();

//a. true
//b. Bred
//c. Hi, my name is John
//d. null



//6. What is the code execution result
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}
  
let counter = new Counter();
  
counter.up();
counter.up();
console.log(counter.down());

//a. 0
//b. 1
//c. 2
//d. 3




//7. What is the code execution result
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
let counter = makeCounter();
let counter2 = makeCounter();
  
counter();
counter();  
counter();

console.log(counter2());

//a. 0
//b. 1
//c. 2
//d. 3




//8. What is the code execution result
function counter() {
  for (var i = 1; i <= 3; i++) {
      setTimeout(() => {
          console.log(i);
      });
  }
}
counter();

//a. 1 2 3
//b. 1 1 1
//c. 3 3 3
//d. 4 4 4




//9. What is the code execution result
function counter() {
  for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
          console.log(i);
      });
  }
}
counter();

//a. 1 2 3
//b. 1 1 1
//c. 3 3 3
//d. 4 4 4