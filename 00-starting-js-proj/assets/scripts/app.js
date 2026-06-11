function createGreeting(userName, message = "Welcome to JavaScript!") {
    return `Hello, ${userName}! ${message}`;
}

const greeting1 = createGreeting("Alice", "How are you?");
console.log(greeting1);
// console.log(createGreeting("Bob", "Nice to meet you!"));
// console.log(createGreeting("Charlie"));