import { apiKey } from "./util.js";

// console.log(apiKey);  

function greet() {
    console.log("Hello!");
}

greet(); // finally executes Hello!
greet(); // again executes Hello!

function greetUser(userName, message = "Hello!") {
    console.log(`${message}, ${userName}!`);
}

greetUser("Alice"); // finally executes "Hello, Alice!"
greetUser("Bob", "Hi"); // again executes "Hi, Bob!"


function createGreeting(userName, message = "Hello!") {
    return "Hi, I am " + userName + " and I want to say: " + message;
}

const greeting1 = createGreeting("Alice"); // returns "Hi, I am Alice and I want to say: Hello!"
const greeting2 = createGreeting("Bob", "Hi"); // returns "Hi, I am Bob and I want to say: Hi"

console.log(greeting1); // greeting1 has the value "Hi, I am Alice and I want to say: Hello!" and will be printed to the console
console.log(greeting2);