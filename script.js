// // question:1
// // Declare an empty multidimensional array
// let multiArray = [];
// // Declare and initialize an empty multidimensional array with two empty sub-arrays
// let newmultiArray = [[], []];
// Question:2
// let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9] ];
//   console.log(matrix);
//   console.log(matrix[0][0]);  
// console.log(matrix[1][2]);
// question:03
// for (let i = 1; i <= 10; i++) {
    // console.log(i);
//   }

// question:04
let tableNumber = parseInt(prompt("Enter the table number: "));
let tableLength = parseInt(prompt("Enter the length of the table: "));
console.log(`Multiplication table of ${tableNumber}:`);
for (let i = 1; i <= tableLength; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br>`);
}
// // question:05
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// question:06
// // Part a: Counting from 1 to 15
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//   counting.push(i);
// }
// console.log("Counting:", counting.join(", "));

// // Part b: Reverse counting from 10 to 1
// let reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//   reverseCounting.push(i);
// }
// console.log("Reverse Counting:", reverseCounting.join(", "));

// // Part c: Even numbers from 0 to 20
// let evenNumbers = [];
// for (let i = 0; i <= 20; i += 2) {
//   evenNumbers.push(i);
// }
// console.log("Even:", evenNumbers.join(", "));

// // Part d: Odd numbers from 1 to 19
// let oddNumbers = [];
// for (let i = 1; i <= 19; i += 2) {
//   oddNumbers.push(i);
// }
// console.log("Odd:", oddNumbers.join(", "));

// // Part e: Series with 'k' (2k, 4k, ... 20k)
// let series = [];
// for (let i = 2; i <= 20; i += 2) {
//   series.push(i + "k");
// }
// console.log("Series:", series.join(", "));

// question:07
// Array of items
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt user to enter an item to search for
let userInput = prompt("Enter the item you want to search for:").toLowerCase();

// Search for the item in the array
if (A.includes(userInput)) {
  alert(`${userInput} is available in the list.`);
} else {
  alert(`${userInput} is not available in the list.`);
}
// // question:08
// // Array of numbers
// let array = [24, 53, 78, 91, 12];

// let largest = Math.max(...array);
// console.log(`The largest number in the array is: ${largest}`);
// question:09
// let array = [24, 53, 78, 91, 12];
// let smallest = Math.min(...array);
// console.log(`The smalllest number in the array is ${smallest}`);

// Question:10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
  