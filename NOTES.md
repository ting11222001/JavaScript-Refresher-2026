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

## Revisiting Functions & Parameters