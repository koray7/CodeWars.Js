// Find non-consecutive number

// function nonConsecutive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const curr = arr[i];
//     const next = arr[i + 1];
//     if (curr + 1 !== next) {
//       return next;
//     }
//   }
//   return null;
// }

// Given an array of integers your solution should find the smallest integer.

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }

//   return result;
// };

// Returning the average of the given array rounded down to its nearest integer.

// function getAverage(marks) {

//   var total = 0;
//   for (var i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }

//   /* returns total number of marks divided by number of marks

//   return Math.floor(total / marks.length);
// }

// Rock Paper Scissors

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };
