// ==========================================
// 1. Stack Memory (Primitive Types)
// Strings, Numbers, Booleans, etc.
// ==========================================

let myName = "Harsh";
let anotherName = myName;

console.log(anotherName); // Output: Harsh

// When we change myName, anotherName DOES NOT change.
// This is because Primitive types give a COPY of the value.
myName = "Anshul";

console.log(myName);      // Output: Anshul
console.log(anotherName); // Output: Harsh (Still the old value)


// ==========================================
// 2. Heap Memory (Reference Types)
// Objects, Arrays, Functions
// ==========================================

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;

// When we change userTwo, userOne ALSO changes.
// This is because Objects give a REFERENCE (address) to the same memory spot.
userTwo.email = "ansh@gmail.com";

console.log(userOne.email); // Output: ansh@gmail.com
console.log(userTwo.email); // Output: ansh@gmail.com