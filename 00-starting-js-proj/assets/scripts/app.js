const user = { 
    name: "Li-Ting", 
    age: 10,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(user); // {name: 'Li-Ting', age: 10}
console.log(user.name); // Li-Ting
user.greet(); // Hello, my name is Li-Ting and I am 10 years old.