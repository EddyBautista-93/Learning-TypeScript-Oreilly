// When you create object literals with {…} syntax, TypeScript will consider it to be a new

// object type or type shape. The object type will have the same prop names and primitive types as the objects value.

// Accessing props of the values can be done with either value.member or the equivalent value[’member’] syntax.

// Example:

// const poet = {
//     born: 1935, 
//     name: "Mary Oliver",
// };

// console.log(poet['born']); // type: number
// console.log(poet.name); // type: string

// poet.end; Error: prop end does not exist in type { born: number, name: string } 

// ## Declaring Object Type

// Object types may be described using a syntax that looks similar to object literals but with types instead of values for fields. It’s the same syntax that TypeScript shows in error messages about type assignability.

// This `poetLater` variable is the same type from before with `name: string` and `born: number`:

// let poetLater: {
//     born: number;
//     name: string;
// };

// poetLater = {
//     born: 1935,
//     name : "Mary Oliver",
// }

// poetLater = "Sappho";
// Error: Type 'string' is not assignable to
// type '{ born: number; name: string; }'

type PoetTy = {
    born: number;
    name: string;
}

let PoetLaterTy: PoetTy;

PoetLaterTy = {
    born: 1935,
    name: "Sara Teasdale",
}
// PoetLaterTy = "Emily" Error : Type 'string' is not assignable to "PoetTy"



// Object types are a core concept for how TypeScript understands JavaScript code. Every value other than null and undefined has a set of members in its backing type shape, and so TypeScript must understand the object type for every value in order to type check it.

// Declaring Object Types
// Inferring types directly from existing objects is all fine and good, but eventually you’ll want to be able to declare the type of an object explicitly. You’ll need a way to describe an object shape separately from objects that satisfy it.

// Object types may be described using a syntax that looks similar to object literals but with types instead of values for fields. It’s the same syntax that TypeScript shows in error messages about type assignability.

// This poetLater variable is the same type from before with name: string and born: number:

// The previous code snippet could be rewritten with a type Poet, which comes with the added benefit of making TypeScript’s assignability error message a little more direct and readable:

type Poet = {
    born: number;
    name: string;
};

let poetLater: Poet;

// Ok
poetLater = {
    born: 1935,
    name: "Sara Teasdale",
};

// poetLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'Poet'.

// Structural Typing
// TypeScript’s type system is structurally typed: meaning any value that happens to satisfy a type is allowed to be used as a value of that type. In other words, when you declare that a parameter or variable is of a particular object type, you’re telling TypeScript that whatever object(s) you use, they need to have those properties.

// The following WithFirstName and WithLastName aliased object
// types both only declare a single member of type string. 
// The hasBoth variable just so happens to have both of them—even 
// though it wasn’t declared as such explicitly—so it can be
// provided to variables that are declared as either of the two
// aliased object types:

type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};

// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;

// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;