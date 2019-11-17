//1. What is the result of code execution

function Parent(name) {}

Parent.prototype = {
    name: "Anya",
    say: function () {
        return this.name;
    }
};

function Child(name) { }

var tempFunc = function () { }; 
tempFunc.prototype = Parent.prototype;
Child.prototype = new tempFunc();

var kid = new Child("Anya");
console.log(kid.say());

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//2. What is the result of code execution

function Parent(name) {}

Parent.prototype = {
    name: "Anya"
};

function Child(name) { }

var tempFunc = function () { }; 
tempFunc.prototype = Parent.prototype;
Child.prototype = new tempFunc();

var parent = new Parent();
var kid = new Child();

Child.prototype.name = "Victor";

console.log(parent.name === "Anya" && kid.name === "Victor");

//a. true
//b. false

//3. What is the result of code execution

function Parent() {}

function Child() {}

var tempFunc = function () { }; 
tempFunc.prototype = Parent.prototype;
Child.prototype = new tempFunc();

var kid = new Child();

console.log(kid.constructor.name);

//a. Parent
//b. Child
//c. Object

//4. What is the result of code execution

function Parent(name) {}

Parent.prototype = {
    name: "Anya",
};

function Child(name) { }

var tempFunc = function () { }; 
tempFunc.prototype = Parent.prototype;
Child.prototype = new tempFunc();
Child.prototype.constructor = Child;

var kid = new Child();

console.log(kid.constructor.name);

//a. Parent
//b. Child
//c. Object