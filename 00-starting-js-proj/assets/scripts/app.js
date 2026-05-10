import { apiKey } from "./util.js";

// console.log(apiKey);  

function greetUser(userName, message = "Hello!") {
    console.log(`${message}, ${userName}!`);
}

greetUser("Alice"); // finally executes "Hello, Alice!"
greetUser("Bob", "Hi"); // again executes "Hi, Bob!"