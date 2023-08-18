# JavaScript

Ref: https://www.youtube.com/watch?v=W6NZfCO5SIk

Node.js is a runtime environment for executing JavaScript

Dynamically typed like Python

Only has one type for numbers, not possible to distinguish between integer and floats

# TypeScript

TypeScript is based on JavaScript

Has static typing.
Compiles a `.ts` file to `.js`.

Can run `.js` files with `node path/to/file.js`.
Install typescript globally on system `npm i -g typescript` if you do not have a `package.json`.
The compiler is called `tsc`.

Can call `tsc --init` to create a `tsconfig.json`.
Target in `tsconfig.json` is the version of JavaScript to target
Enable "sourceMap" in `tsconfig.json` to generate debugger files.

# Vscode

Can use VScode extension Live-server to render HTML files from VScode (Alt+l alt+o)

Can use VSCode debugger to generate a `launch.json` for node.js.
has to add `"preLaunchTask": "tsc: build - tsconfig.json"`
