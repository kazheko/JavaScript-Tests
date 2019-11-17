//1. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) { }

Child.prototype = Parent.prototype;

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

Parent.prototype = {
    name: "Anya",
    say: function () {
        return this.name;
    }
};

function Child(name) { }

Child.prototype = Parent.prototype;

var kid = new Child();
console.log(kid.say());

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//3. What is the result of code execution

function Parent(name) {}

Parent.prototype = {
    name: "Anya",
    say: function () {
        return this.name;
    }
};

function Child(name) { }

Child.prototype = Parent.prototype;

var kid = new Child();
console.log(kid.hasOwnProperty('name'));

//a. true
//b. false

//4. What is the result of code execution

function Parent(name) {}

Parent.prototype = {
    name: "Anya"
};

function Child(name) { }

Child.prototype = Parent.prototype;

var parent = new Parent();
var kid = new Child();

Child.prototype.name = "Victor";

console.log(parent.name === "Anya" && kid.name === "Victor");


//a. true
//b. false