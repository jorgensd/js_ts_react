// Javascript code
console.log("Hello world!!!!");
// Make popup alert
// alert("Test");

// Declare variable
let undefined_name;

console.log(undefined_name); // Shows undefined on JavaScript console if not initialized

// Variable names can not be reserved keywords like 'let' 'if' 'else' etc as any sane programming framework
// Variables cannot start with a number
// Cannot contain spaces or hyphen (-), use camelCase
// Case sensitive variable names
let name = "J.D.";
console.log(name);
let firstName = "Hello!";
let firstname = "see, im unique";
console.log(firstName, firstname);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Constant variables

const constRate = 0.5;
// constRate = 0.5; // Would yield `invalid assignment to const
console.log(constRate);

//-------------- Remaining primitive types

// Booleans
let state = true;
state = false;

// Undefined / null
let variable = null; // Used to clear variables
let other_variable = undefined; // Default when not assigning to variable

console.log(typeof name); // Prints string in console
name = 30;
console.log(typeof name); // Prints number in console
console.log(typeof state); // Prints boolean
console.log(typeof other_variable); // Returns undefined
console.log(typeof variable); // Returns object

//------------- Reference types

// Objects
let person = { name: "J.D", age: 31 }; // Dictionary is called 'object literal'
console.log(person);
// Accessing property of object
person.age = 10;
console.log(person);
console.log(person.age);
let selection = "age";
person[selection] = 97;
console.log(person["age"]);

// Arrays
let colors = ["red", "blue"];
console.log(typeof colors, colors);
console.log(colors[0], typeof colors[0]);
colors[0] = 5;
console.log(colors[0], typeof colors[0]);

colors[10] = "green";
console.log(colors[5], colors);

console.log(typeof colors); // Returns object
console.log(colors.length);

// Functions
function greetHenrik() {
  // Body of function (similar to C++)
  console.log("Hello Henrik, I've been expecting you");
}

greetHenrik();

function generalGreeting(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

generalGreeting("James", "Bond");

function square(number) {
  return number * number;
}

let number = square(4.2);
console.log(square(4.2));
console.log(number);

// Arrow function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Only loops through variables that are actually initiated
console.log(colors.map((color) => color + "Hello"));

[number, ...rest] = colors;
console.log(number);
console.log(rest);
