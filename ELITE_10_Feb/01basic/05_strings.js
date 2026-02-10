const name = "Harsh";
const repoCount = 50;

// 1. Concatenation (Old Style)
console.log(name + repoCount + " Value"); 
// Output: Harsh50 Value

// 2. String Interpolation (Modern Style)
// FIX: Use backticks (` `), NOT single/double quotes.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: Hello my name is Harsh and my repo count is 50


// 3. String Object
const gameName = new String('harsh-aa-com');

console.log(typeof gameName); 
// Output: 'object' (Because we used the 'new' keyword)

console.log(gameName[0]); 
// Output: h

console.log(gameName.__proto__); 
// Output: {} (The String Prototype object, NOT the length)


// 4. String Methods
console.log(gameName.length);       // Output: 12
console.log(gameName.toUpperCase());// Output: HARSH-AA-COM
console.log(gameName.charAt(2));    // Output: r

// FIX: 'indexOf' uses camelCase (small 'i', big 'O')
console.log(gameName.indexOf("t")); // Output: -1 (Not found)
console.log(gameName.indexOf("a")); // Output: 1 (First 'a' is at index 1)


// 5. Substring (Does not obey negative values)
const newString = gameName.substring(0, 4);
console.log(newString); 
// Output: hars (Last index 4 is excluded)


// 6. Slice (Can use negative values)
const anotherString = gameName.slice(0, 4);
console.log(anotherString); 
// Output: hars

// Tricky Slice Example:
// "harsh-aa-com" (Length 12)
// -8 means: Start counting 8 from the back (Index 4)
const negativeSlice = gameName.slice(-8, 6); 
console.log(negativeSlice);
// Output: h- (Starts at index 4, ends before index 6)


// 7. Extra Useful Methods
const newStringOne = "   Harsh    ";
console.log(newStringOne);        // Output: "   Harsh    "
console.log(newStringOne.trim()); // Output: "Harsh" (Removes spaces)

const url = "https://harsh.com/harsh%20bajpai";
console.log(url.replace('%20', '-')); // Output: https://harsh.com/harsh-bajpai
console.log(url.includes('sundar'));  // Output: false


// ThunderClient, Postman, Bracket Colour, Prettier [Essential extensions for JS Developers]

// Learn what is Codespaces in VS Code (Cloud-based development environment) - https://www.youtube.com/watch?v=Vqg9YBzjK8o
// In github codespaces are there that directly push code online its like a online IDE, you can code in browser.
// It will directly push code to github repository.
// It is very useful for people who want to contribute to open source projects without setting up a local environment.
// You can also use it for your own projects to code from anywhere without worrying about your local setup.
// Its an online VS code editor that runs in the cloud. 
// You can create a codespace from your GitHub repository and it will give you a full VS Code environment in your browser. 
// You can code, run, and debug just like you would on your local machine. 
// It also has all the extensions and features of VS Code, so you can customize it to your liking. 
// It's a great way to work on projects from anywhere without needing to set up a local environment.