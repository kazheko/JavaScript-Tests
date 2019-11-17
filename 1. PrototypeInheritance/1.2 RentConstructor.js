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

function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child("Anya");
console.log(kid.name);

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//3. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child("Anya");

delete kid.name;

console.log(kid.name);

//a. TypeError: kid.say is not a function
//b. Display undefined
//c. Display Victor
//d. Display Anya

//4. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child();
console.log(kid.hasOwnProperty('name'));

//a. true
//b. false

//5. What is the result of code execution

function Parent(name) {
    this.name = name || "Victor";
}

function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child();
console.log(kid instanceof Parent);

//a. true
//b. false

//6. What is the result of code execution

function Lion() {
    this.legs = 4;
}

function Eagle(name, job) {
    this.legs = 2;
    this.wings = 2;
}

function Griffin(){
    Eagle.apply(this);
    Lion.apply(this);
}

var griffin = new Griffin();
console.log(griffin.legs);

//a. 2
//b. 4
//c. undefined
//d. TypeError