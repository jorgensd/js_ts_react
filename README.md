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

# HTML/CSS

HTML - Hypertext Markup language
CSS - Cascading Stylesheet
URL - Uniform Resource Location

The browser requesting a website is called the _client_.
A _server_ (somewhere) hosts the website.

HTTP - Hypertext transfer protocol is how devices communicate over the internet (s) is encrypted communication.

Example:
I want to get `index.html` (homepage) with HTTP v 1.1 from the host. This is sent to the server.
This is an http-request

```bash
GET /index.html HTTP/1.1
Host: www.fenicsproject.org
Accept-Language: en-us
```

The http-response could be

```bash
HTTP/1.1 200 OK
Date: 21 Aug 2023 11:51
Content-Type: text/html

<!DOCTYPE html>
<html>
...
</html>
```

where we get data back with HTTP v 1.1, status 200 means ok, and we get the content (html).

DOM - Documented Object Model
The browser reads the response/html-document and creates a DOM.
For each extra resource (such as colors, fonts etc) the browser sends more http requests to other pages to get the required data.

127.0.0.1 is always the local component

# React

JavaScript library developed at Facebook to generate web-pages

React generate and update DOM elements

Creating a react app with `vite` using node package manager (npm).

```bash
npm create vite@x.y.z
```

Run web-server

```bash
npm run dev
```

## Structure

- The folder `node_modules` should never be touched, contains third party dependencies
- In `assets`is where we put public assets, like images, videos and so on.
- `src` is where we place our source code for the application.
- `index.html` is the entry point of the webpage
- `tsconfig.json` is the settings for converting typescript to JavaScript
- `vite.config.ts` is config for `vite`.

## React components

Using `ts` or `tsx` extension. `tsx` is used for React components (most commonly)

React takes the component tree and creates a virtual DOM representation that compares with the
previous state of the DOM. This is done by `React-DOM`.

# Bootstrap

CSS library (can be installed with npm)
