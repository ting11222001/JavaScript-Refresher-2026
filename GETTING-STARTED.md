# How to Get the Project Started

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

