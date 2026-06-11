function handleTimeout() {
    console.log("Timeout!");
}

const handleTimeout2 = () => {
    console.log("Timeout ... again!");
}

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 2000);
setTimeout(() => {
    console.log("Timeout ... again and again!");
}, 3000);

// custom function example
function greet(greetFn) {
    greetFn();
}

greet(() => console.log("Hello, World!"));