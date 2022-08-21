// The type system is the set of rules for how a programming language understands what types the constructs in a program may have.

// The TypeScript type system works by

// - Reading your code and understanding all the types and values in existence.
// - Complaining to the user if a values usage doesn’t match with its types.

// TypeScript emitting a type error example

// let firstName = "Whitney";
// firstName.length(); // This expression is not callable , Type 'Number' has no call signature

// Typescript checks to see what type firstName is, it chooses string due to “Whitney” being in parenthesis.

// Seeing that the code is trying to access a .length member of firstName and call it like a function.

// Complaining that the  .length member of a string is a number, not a function.

// ## Assignability

// TypeScript reads variables’s initial value to determine what type those variables are allowed to be.

// This code will run fine due to the type system inferring that the value is of type String. 

let firstName = "Carole";
firstName = "Joan";

// This will throw a error because you can’t change a String to a Boolean.

// let lastName = "King";
// lastName = true; // cant convert string to boolean

// ## Type Annotations

// Variables that can’t have their initial type inferred go through what’s called an *evolving any*: rather than enforce any particular type, TypeScript will evolve its understanding of the variable’s type each time a new value is assigned.

// Here, assigning the evolving `any` variable `rocker` is first assigned a string, which means it has string methods such as `toUpperCase`, but then is evolved into a `number`

let rocker; // Type: any

rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok

rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok

// rocker.toUpperCase();// Error: 'toUpperCase' does not exist on type 'number'.

// TypeScript provides a syntax for declaring the type of a variable without having to assign an initial value called type annotation.

// A type annotation is placed after the name of the variable and includes colons followed by the name of the type.

// The type annotation indicates the rocker variable is meant to be type string

let punkRocker: string;
rocker = "Joan Jett";

// ## Type Shapes

// TypeScript knows what member props should exist on object. If you attempt to access a property of a variable, TypeScript will make sure that property is know to exist on that variables’s type.

let rapper = "Queen Latifah";
rapper.length; // ok

// Operations that TypeScript doesn’t know to work on strings will not be allowed:

// rapper.push('!'); Property 'push' does not exist on type 'string'.

// Types can also be objects
let cher = {
    fName: "Cherilyn",
    lName: "Sarkisian",
};

// cher.middleName;    Property 'middleName' does not exist on type '{ firstName: string; lastName: string; }'.

// ## Modules

// Modules organize a related set of JavaScript/TypeScript code. It can contain variables and functions.

// Example:


//  import { value } from "./values";
//  export const doubled = value * 2;


// The following `a.ts`
//  and `b.ts`
//  files are both modules that export a similarly named `shared`
//  variable without issue. `c.ts`
//  causes a type error because it has a naming conflict between an imported `shared`
//  and its own value:


// // a.ts
// export const shared = "Cher";
// // b.ts
// export const shared = "Cher";
// // c.ts
// import { shared } from "./a";
// //       ~~~~~~
// // Error: Import declaration conflicts with local declaration of 'shared'.

// export const shared = "Cher";
// //           ~~~~~~
// // Error: Individual declarations in merged declaration
// // 'shared' must be all exported or all local

// ## Summary


// What a “type” is and the primitive types recognized by TypeScript

// What a “type system” is and how TypeScript’s type system understands code

// How type errors compare to syntax errors

// Inferred variable types and variable assignability

// Type annotations to explicitly declare variable types and avoid evolving any types

// Object member checking on type shapes

// ECMAScript module files’ declaration scoping compared to script files