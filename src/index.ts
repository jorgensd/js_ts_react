
console.log("Hello world");
let age: number = 10;
// age = "s"; // Results in compilation error
if (age < 50)
    age += 10;
console.log(age);

// built-in types
// any, unknown, never, enum and tuple are new types compared to JavaScript

// Can use _ to split variable 123_456_789 is the same as below
let sales: number = 123456789;
let is_published: boolean = true;
let q; // Type any
q = 1;
q = "a"; // Could do this, but not recommended as it goes against typescript


function render(document: any) { // Could do this to avoid errors. Could also turn off "Type Checking"->noImplicitAny", but use with caution
    console.log(document);
}


// let numbers: number[] = [1, "3", 3]; // Valid JavaScript but TypeScript error
let numbers = [1, 2, 3];
let strings: string[] = []; // Empty array type annotation
strings[2] = "A";
strings[4] = "BcD";
console.log(strings.forEach(s => s));
console.log("Hello");

// Could use tuples, [number, boolean]. Not adviced to use with more than two variables.
let data: [string, number] = ["James", 7];

// Enums (PascalCase)
const enum TshirtSizes { Small = 1, Medium, Large }; // Default values are 0, 1, 2 etc..
console.log(TshirtSizes.Medium); // is 2
// Enums should always be declared as consts, makes optimized javascript code

// Type hint annotation
function calculateTax(income: number, taxYear: number): number { // Add void if you do not return a value
    if (taxYear < 2022)
        return income * 0.1;
    if (income < 50_000)
        return income * 0.2;
    return income * 0.5;
}

calculateTax(234_591, 2021);

// Optional parameter
function calculateYearlessTax(income: number, taxYear?: number): number { // Add void if you do not return a value
    if ((taxYear || 2022) < 2022) // JavaScript or, if it is not decleared
        return income * 0.1;
    if (income < 50_000)
        return income * 0.2;
    return income * 0.5;
}

// Default value
function calculateDefaultTax(income: number, taxYear: number = 2022): number { // Add void if you do not return a value
    if (taxYear < 2022) // JavaScript or, if it is not decleared
        return income * 0.1;
    if (income < 50_000)
        return income * 0.2;
    return income * 0.5;
}


let employee = { id: 1 }
//employee.name = "mosh"; // illegal definition

// Read-only property
let person: { readonly id: number, name: string, retire: (date: Date) => void } = {
    id: 1, name: "L",
    retire: (date: Date) => { console.log(person.name + " retired at " + date) }
};
//person.id = 5; // not allowed
let now: Date = new Date();
person.name = "LP!";
person.retire(now);

// Create custom type with type-alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let james: Employee = { id: 1, name: "James", retire: (date: Date) => { console.log(james.name + " retires at " + date); } }
james.retire(now);


// Type unions


function kgToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }


}
console.log(kgToLbs(10), " === ",
    kgToLbs("10kg"));


type Draggable = {
    drag: () => void

}
type Resizeable = {
    resize: (x: number, y: number) => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
    drag: () => { },
    resize: (x: number, y: number) => { console.log("resized to " + x + " by " + y) }
}

textBox.resize(1, 2);

// Literal
//let quantity:50 = 51; // Not valid
let quantity: 50 | 100 = 100; // Valid

type Quantity = 50 | 100;
let quantity2: Quantity = 100;

type Metric = "cm" | "inch";

let trikk: Metric = "cm";


// Can use null-values as input, use union operator with type | null and if (value) else do something else



type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
};

let customer = getCustomer(1);
// Optional way of using null or undefiend
// if (customer !== null && customer !== undefined)
//     console.log(customer.birthday);


console.log(customer?.birthday?.getFullYear()); // ?. is optional property access operator

// Optional element accessor operator
// if (customers !== null && customers !== undefined)
//   customers[0]
// Easier with
// customer?.[0]
//let log: any = (message:string) => console.log(message);
let log: any = null;
log?.("a"); // Only runs if we use log != null or undefined.