const user = {
    name: "Li-Ting",
    age: 10
}

const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(user);
console.log(extendedUser);