// Unshift method :
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//  let bikes = ["pulsar","ninja","ktm"];
//  bikes.unshift("Yamaha"); // Yamaha
//  console.log(bikes);

// Shift method :
// The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
let bikes = ["pulsar","ninja","ktm","activa"];
// console.log(bikes.shift()); // Yamaha
//  console.log(bikes);

// Slice method :
// The slice() method extracts a part of an array and returns the extracted part in a new array.

// console.log(bikes.slice(1, 3)); // Output : ["Ninja", "KTM"]
// console.log(bikes.slice(0, 4)); // 1st index will include and last index won't include

// Splice method :
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

// console.log(bikes.splice(0,4));  // start: the index at which you need to change the array
// deleteCount : The numbers you want to delete/extracts
// end: the index at which you need to stop changing the array

// console.log(bikes.splice(0, 3));
// console.log(bikes.splice(1, 4));

// Adding element using splice method :
 //bikes.splice(1, 0, "Kawasaki","Honda"); // 1: start from index 1,  0: delete no
// console.log(bikes);

// Replace using splice method :
//  bikes.splice(1, 2, "Kawasaki", "Honda"); // 1: start from index 1,  2: delete no
// console.log(bikes);

// concat method :
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but returns a new array.

 let cars = ["Ferrari", "BMW", "Audi", "Porsche", "Range-Rover"];
// let vehicle = bikes.concat(cars);
// console.log(vehicle);

// console.log(Array.isArray(cars)); // to check the type
// console.log(Array.from("Pramod")); // to create an array

// Flat array method :
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// let mixedArray = [1, 2, 3, ["a", "b", "c"], [2.5, 5.6, 3.9]];
//  console.log(mixedArray);
//  console.log(mixedArray.flat(Infinity));

// Array of method :
// The of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

let num1 = 100;
let num2 = 200;
let num3 = 300;

//console.log(Array.of(num1, num2, num3)); // instance of an array