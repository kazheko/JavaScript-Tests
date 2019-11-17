//1. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) {
    Parent.apply(this, arguments);
}

Child.prototype = new Parent();

var kid = new Child("Anya");
console.log(kid.say());

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//2. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) {
    Parent.apply(this, arguments);
 }

Child.prototype = new Parent();

var kid = new Child();
console.log(kid.hasOwnProperty('name'));

//a. true
//b. false

//3. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) {
    Parent.apply(this, arguments);
}

Child.prototype = new Parent();

var kid = new Child();
kid.name = "Anya"
delete kid.name
console.log(kid.say());

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//4. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) { 
    Parent.apply(this, arguments);
}

Child.prototype = new Parent();

var kid = new Child();

delete kid.name;

console.log(kid.hasOwnProperty('name'));

//a. true
//b. false