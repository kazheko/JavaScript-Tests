//1. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) {}

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

function Child(name) { }

Child.prototype = Parent;

var kid = new Child("Anya");
console.log(kid.say());

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//3. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) { }

Child.prototype = new Parent();

var kid = new Child();
kid.name = "Anya"
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

function Child(name) { }

Child.prototype = new Parent();

var kid = new Child();
kid.name = "Anya"
delete kid.name
console.log(kid.say());

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//5. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) { }

Child.prototype = new Parent();

var kid = new Child();
console.log(kid.hasOwnProperty('name'));

//a. true
//b. false

//6. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) { }

Child.prototype = new Parent();

var kid = new Child();
console.log(kid instanceof Parent);

//a. true
//b. false