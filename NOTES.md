# NOTES

## Starting Project

Downloaded `00-starting-js-proj.zip`.

## Adding JavaScript To A Page & How React Projects Differ

We usually add JavaScript code to a website by `<script>` import in the `index.html`:
```html
<script src="assets/scripts/app.js" type="module"></script>
```

This `type="module"` allows us to do `import` in the `app.js` script e.g. importing the `util.js`.

In React projects I don't need to manually add the JS script myself.

React projects use a build process that injexts these script tags into the HTML code for me.

## React Projects Use a Build Process

React projects use a build process, which simply means, the code you write is not the code that gets executed like this, at least, in the browser.

Instead, the code you write is transformed behind the scenes before it's handed off to the browser.

In the `index.html` there won't be any `<script>` tags, but once the app is running in the browser and use dev tool, then I will see the `<script>` tags embeded in the html file.

This transformed code is executed in the browser.

Why does React need a build process to transform the code in the project?

Raw React code won't be able to get executed in the browser. Browser doesn't understand JSX code, which is not a default JS feature.

Also, React needs optimisation that reduce the amount of code.

Node.js is needed for the build process to work.

## "import" & "export"

I will need the file extension `.js` when importing in a pure JS code:
```js
import { apiKey } from "./util.js";
```

For the React components I can just use `./util`.

React's build process will merge all the JS scripts into one big file and download and import it into the html file once.

### named export

For example:
```js
// In app.js:
import { apiKey } from "./util.js";

console.log(apiKey);  // apple

// In util.js:
export let apiKey = "apple";
```

### default export

Useful when there's only one thing to export from a file.

For example:
```js
// In app.js:
import apiKey from "./util.js";

console.log(apiKey);  // pineapple

// In util.js:
export default "pineapple";
```

This is useful in React as there is usually one JS function in a component file.

```js
function ExpenseDate() {
    return();
}

export default ExpenseDate;
```

### I can mix them up, just make sure there's only one default export

For example:
```js
// In util.js:
export default "pineapple";
export let apiKey = "apple";
export let abc = "abc";

// In app.js:
import * as util from "./util.js";
console.log(util.apiKey);  // apple
```

### I can also use alias

```js
// In app.js:
import {apiKey, abc as content} from "./util.js";
console.log(content);  // abc
```

## Revisiting Variables & Values

All things in an app are about data. A variable stores a value. It's about Reusability and Readability.

String, Number, Boolean, Null and Undefined:
- `undefined`: default if no value was assigned yet
- `null`: Explicitly assigned by developer (reset value)
- Double or Single quotes with the strings.

Key things to note:
- camelCasing
- describe what the "thing" it identifies contains or does e.g. userName, isCorrect, loadData, ...

For example:
```js
// In app.js
let userMessage = "Hello, World!";
console.log(userMessage); // Hello, World!

// In app.js I can print it twice and have one central place to update the variable value
let userMessage = "Hello, World!!";
console.log(userMessage); // Hello, World!!
console.log(userMessage); // Hello, World!!
```

With `const`, I can't reassign value to the variable. That is the main difference from `let`.
```js
// In app.js
const userMessage = "Hello, World!!";
userMessage = "Hello, World!";
console.log(userMessage); // Hello, World!!
console.log(userMessage); // Hello, World!!

// error
app.js:2 Uncaught TypeError: Assignment to constant variable.
```

## Revisiting Operators

Use `===` to check equality (strict equality).

For example:
```js
1 === "1"  // false — different types
1 === 1    // true
```

Use `+` for addition calculations and concatenating two strings into one.

For example:
```js
console.log("hello" + "world"); // helloworld
console.log(10 / 5);    // 2
console.log(10 === 10); // true
console.log(10 === "10"); // false, because === checks for both value and type
console.log(10 == "10");  // true, because == checks for value only and does type coercion
```

## Revisiting Functions & Parameters

Use 'function' keyword to define the function:
```js
function greet() {                  
    console.log("Hello, World!");
}

greet(); // calling it
greet(); // calling it for multiple times
```

Passing parameters:
```js
function greetUser(userName, message) {
    console.log(`Hello, ${userName}! ${message}`);
}

greetUser("Alice", "How are you?");     // Hello, Alice! How are you?
greetUser("Bob", "Nice to meet you!");  // Hello, Bob! Nice to meet you!
```

Default parameter value:
```js
function greetUser(userName, message = "Welcome to JavaScript!") {
    console.log(`Hello, ${userName}! ${message}`);
}

greetUser("Charlie"); // Hello, Charlie! Welcome to JavaScript!
```

Return a value - make sure the function name is clear about what it does:
```js
function createGreeting(userName, message = "Welcome to JavaScript!") {
    return `Hello, ${userName}! ${message}`;
}

const greeting1 = createGreeting("Alice", "How are you?"); // using this for readability or just console.log(createGreeting(...))
console.log(greeting1); // Hello, Alice! How are you?
```

## Arrow Functions

Useful for anonymous functions i.e. the functions that don't need a name.

For example, the function that should be triggered when a button is clicked in React:
```js
<div id="tabs">
    <menu>
        <button
        className={activeContentIndex === 0 ? "active" : ""}
        onClick={() => setActiveContentIndex(0)}
        >
...
```

`() => setActiveContentIndex(0)` is the value for the click listener. It doesn't carry any name.

For example:
```js
// util.js
export default (userName) => {
  console.log(`Hello, ${userName}!`);
}

// app.js
import greet from './util.js'; // I can assign a name to that default export
greet("Li-Ting");
```

## More on the Arrow Function Syntax

### Omitting parameter list parentheses

If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

Instead of
```
(userName) => { ... }
```

you could write:
```
userName => { ... }
```

### Omitting function body curly braces

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of
```
number => { 
  return number * 3;
}
```

you could write
```
number => number * 3;
```

## Revisiting Objects & Classes

Define an object:
```js
// app.js
const user = { name: "Li-Ting", age: 10 };

console.log(user); // {name: 'Li-Ting', age: 10}
console.log(user.name); // Li-Ting
```

Define a method as its property:
```js
const user = { 
    name: "Li-Ting", 
    age: 10,
    greet() {   // method!
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(user); // {name: 'Li-Ting', age: 10, greet: ƒ}
user.greet(); // Hello, my name is Li-Ting and I am 10 years old.
```

Classes here are not used much in React.

## Arrays & Array Methods like map()

Arrays can contain other arrays, objects, numbers, strings, etc.

For example:
```js
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];
```

Utility methods of arrays e.g. `push`:
```js
const hobbies = ["coding", "hiking", "running"];

console.log(hobbies); // (3) ['coding', 'hiking', 'running']
hobbies.push("cooking");
console.log(hobbies); // (4) ['coding', 'hiking', 'running', 'cooking']
```

E.g. `findIndex`:
```js
const hobbies = ["coding", "hiking", "running"];

const result = hobbies.findIndex(item => item === "hiking");
console.log(result);  // 1
```

Or write like this for the arrow function part:
```js
const result = hobbies.findIndex((item) => {
    return item === "running";
});

console.log(result); // 2
```

E.g. `map` which returns a new array of transformed elements, so the original array remains untouched:
```js
const hobbies = ["coding", "hiking", "running"];

const edittedHobbies = hobbies.map(item => item + " is fun!")
console.log(edittedHobbies); // ['coding is fun!', 'hiking is fun!', 'running is fun!']
console.log(hobbies); // ['coding', 'hiking', 'running']
```

I can use `map` to transform objects:
```js
const hobbies = ["coding", "hiking", "running"];

const edittedHobbies = hobbies.map((item) => ({text: item}))
console.log(edittedHobbies);
/**
(3) [{…}, {…}, {…}]
0: {text: 'coding'}
1: {text: 'hiking'}
2: {text: 'running'}
*/
```

## Destructuring