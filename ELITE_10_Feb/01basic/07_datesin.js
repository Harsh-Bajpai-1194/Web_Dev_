// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Output: Current date and time in string format
// console.log(myDate.toDateString()); // Output: Current date in a more readable format (e.g., "Mon Feb 10 2024")
// console.log(myDate.toISOString()); // Output: Current date and time in ISO format (e.g., "2024-02-10T12:34:56.789Z")
// console.log(myDate.toLocaleDateString()); // Output: Current date in the local date format (e.g., "2/10/2024" in the US)
// console.log(myDate.getTime());   // Output: Current date and time in milliseconds since January 1, 1970
// console.log(typeof myDate); // Output: object (because Date is an object in JavaScript)

let specificDate = new Date('2024-01-01')
console.log(specificDate.toString()); // Output: "Tue Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"

let myTimeStamp = Date.now()

//console.log(myTimeStamp); // Output: Current timestamp in milliseconds since January 1, 1970

let dateFromTimeStamp = new Date(myTimeStamp)
console.log(dateFromTimeStamp.toString()); // Output: Current date and time based on the timestamp
console.log(myCreatedDate.getTime()); // Output: "Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


