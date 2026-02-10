// Numeric Comparisons
console.log(2 > 1);                // true
console.log(2 < 1);                // false
console.log(2 >= 1);               // true
console.log(2 <= 1);               // false
console.log(2 == 1);               // false
console.log(2 != 1);               // true

// Strict vs Loose Equality
console.log(2 === "2");            // false
console.log(2 !== "2");            // true
console.log("2" > 1);              // true (String converts to Number)
console.log("2" < 1);              // false

// Lexicographical Comparison (String vs String)
console.log("2" > "12");           // true (Alphabetical check: "2" > "1")
console.log("2" < "12");           // false

// NULL & UNDEFINED Comparisons
console.log(null > undefined);     // false
console.log(null < undefined);     // false
console.log(null == undefined);    // true
console.log(null === undefined);   // false
console.log(null > 0);             // false
console.log(null == 0);            // false
console.log(null >= 0);            // true (Comparison converts null to 0)

// NaN (Not a Number) Checks
console.log(NaN == NaN);           // false
console.log(NaN === NaN);          // false

// Typeof Edge Cases
console.log(typeof NaN);           // number
console.log(typeof null);          // object
console.log(typeof undefined);     // undefined

// Undefined vs Numbers
console.log(undefined > 0);        // false
console.log(undefined < 0);        // false
console.log(undefined == 0);       // false
console.log(undefined === 0);      // false
