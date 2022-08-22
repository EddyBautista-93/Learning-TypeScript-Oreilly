// ## Definitions

// Unions

// - Expanding a value’s allowed type to be two or more possible types.

// Narrowing

// - Reducing a value’s allowed type to noy be one or more possible types.

// ## Union Types

// Union types allow for us to let a variable multiple types.

// Example

let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // this is okay because we allowed for thinker to be string or null.
}

// Even though you may allow for a type to be a string and number, type script will restrict properties that don’t exist on al union types.

let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

physicist.toString(); // This is allowed because toString exist in both types.

// physicist.toUpperCase();
//           ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.

// physicist.toFixed();
//           ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
//   Property 'toFixed' does not exist on type 'string'.

// ## TypeOf Checks

// TypeScript recognizes the typeof operator in narrowing down variable types.

// example:

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (typeof researcher === "string") researcher.toUpperCase();

// Logical negations from ! and else statements work as well.
if (!(typeof researcher === "string")) {
  researcher.toFixed(); // Ok because its a number
} else {
  researcher.toUpperCase(); // of because its a string
}

// The above code snipper can be rewritten as a ternary statement.
typeof researcher === "string"
  ? researcher.toUpperCase() // string
  : researcher.toFixed(); // number

// ## Literal Types

// If you declare a variable as `const` and directly give it a literal value, TypeScript will infer the variable to be that literal value as a type.

// example:
const philosopher = "Hypatia";


// ## Type Aliases

// Typescript includes type aliases for assigning easier names to be reused types. 

// A type alias starts with the type keyword, a new name and then = with any given type.

// Example:

type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;