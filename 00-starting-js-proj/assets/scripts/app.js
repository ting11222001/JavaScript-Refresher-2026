function greet({ firstName, lastName }) {
    return `Hello, ${firstName} ${lastName}!`;
}

console.log(greet({ firstName: "Li-Ting", lastName: "Liao" }));