// ==========================================
// SECTION 1: Basic Variables & Conversions
// ==========================================
let score = 33;
let valueInNumber = Number(score);
let isLoggedIn = "Harsh";

// Type Checks
console.log(typeof score);         // number
console.log(typeof(score));        // number
console.log(typeof(""));           // string

// Boolean Coercion
console.log(Boolean(""));          // false

// ==========================================
// SECTION 2: Operations & Coercion
// ==========================================

// String Concatenation vs Addition
console.log("1" + 2);              // "12"
console.log(1 + "2");              // "12"
console.log("1" + 2 + "2");        // "122"
console.log(1 + 2 + "2");          // "32"

// Operator Precedence
console.log((3 + 4) * 5 % 3);      // 2

// Unary Operators
console.log(+true);                // 1
console.log(true);                 // true
console.log(+"");                  // 0

// Chained Assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// Prefix Increment
let gameCounter = 100;
++gameCounter;
console.log(gameCounter);          // 101

// ==========================================
// SECTION 3: Comparisons
// Link: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations
// Link: https://262.ecma-international.org/5.1/#sec-11.9.3
// ==========================================


// ==========================================
// SECTION 4: Advanced Data Types (Symbols & BigInt)
// ==========================================

const scoreValue = 100.3;
const outsideTemp = null;

// Symbols (Unique Identifiers)
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);     // false (Symbols are unique)

// BigInt vs Unsafe Numbers
const bigNumber = 34568921568693285613; // Unsafe Number
const bigNum = 2538968632896369n;       // BigInt (Safe)

console.log(bigNumber); // Precision lost
console.log(bigNum);    // Exact value preserved

// ==========================================
// SECTION 5: Reference (Non-Primitive) Types
// ==========================================

// 1. Array
const heros = ["shaktiman", "chota bheem", "doga"];
console.log(typeof heros);         // object

// 2. Object
let myObj = {
    name: "Harsh",
    age: 20,
};
console.log(typeof myObj);         // object

// 3. Function
const myFunction = function(){
    console.log("Hello World");
};
console.log(typeof myFunction);    // function