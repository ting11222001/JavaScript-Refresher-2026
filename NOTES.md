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


## My own notes to run up the JavaScript starting code from tutorial locally

### Why using `npx vite .`
Vite looks for index.html in the folder you give it. You passed . (current folder), so it finds your index.html there. That HTML file likely has a <script> tag pointing to assets/scripts/app.js, so Vite serves both.

Vite also watches your files. When you save app.js, it reloads the browser automatically. That's what those page reload lines in the terminal show.

### What is npx
npx runs a Node.js package without installing it globally. Instead of doing:
```
npm install -g vite
vite .
```

You just do:
```
npx vite .
```
Node downloads and runs vite temporarily. Your node_modules folder already has Vite installed locally (from package.json), so npx uses that copy.

### What is Vite
Vite is a local development server for frontend projects. It does two things:

1. Serves your files over HTTP so the browser can load them (that's the localhost:5173 URL).
2. Hot-reloads the browser when you change a file.

It also handles module imports and can bundle your code for production later with npx vite build.

### I can switch to Parcel

The problem is Vite is not in your package.

Vite is not in your `package.json` at all. So when you run npx vite ., it downloads a temporary copy of Vite each time.

Your project was actually set up for Parcel, not Vite. You can see `parcel-bundler` in dependencies and the start script uses Parcel.

Parcel is listed in `package.json` but not actually installed. Run this first:
```
npm install
```

That will install everything in `package.json`, including `parcel-bundler`, into `node_modules`. Then run `npm start` again.

### Conclusion
Both are tools that do the same basic job: serve your files locally and reload the browser when you save. The difference is mostly age and speed.

Parcel came first (around 2017). It needs zero configuration. You point it at your HTML file and it works. It was popular for courses and tutorials because it is simple to start.

Vite came later (2020). It is much faster, especially on large projects. It has become the modern standard. Most new projects use Vite now.