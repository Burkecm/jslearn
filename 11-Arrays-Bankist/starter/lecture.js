'use strict';

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// // LECTURES
// /////////////////////////////////////////////////
// // Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];
// // slice - just liks with strings
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice()); // shallow copy
// console.log([...arr]); // also shallow copy

// // splice - modifies the original
// console.log(arr.splice(2)); // returns everything being cut from the string
// console.log(arr);

// // reverse - Reverses elements in the array, mutates the original
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'q', 'e', 'g'];
// console.log(arr2.reverse());

// // concat - Concatenates 2 arrays
// let letters = arr.concat(arr2);
// letters = [...arr, ...arr2];
// console.log(letters);

// // join
// console.log(letters.join('-'));

// // at
// arr = [23, 11, 64];
// console.log(arr.at(0));
// console.log(arr.at(-1));

// //forEach
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// // forEach with Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (currval, key, map) {
//   console.log(`${key}: ${currval}`);
// });

// // forEach with Sets
// const currenciesUnique = new Set(['USD', 'EUR', 'FRA', 'USD', 'EUR', 'USD']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (val, _, set) {
//   console.log(`${val}: ${val}`);
// });

// // Data Transformations: Map, Filter, Reduce

// // Map - similar to forEach, but creates a new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUSD = 1.1;
// const movementUSD = movements.map(function (mov) {
//   return Math.round(mov * eurToUSD);
// });
// console.log(movements);
// console.log(movementUSD);

// const movementsDesc = movements.map(
//   (mov, i) =>
//     `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );
// console.log(movementsDesc);

// // Filter - creates a new array for each element for which the given condition is true
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);
// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawals);
// console.log(movements);

// // Reduce - creates a single value from an array, such as summing, concatting, etc.
// console.log(movements);
// const balance = movements.reduce((accumulator, currVal) => {
//   console.log(accumulator);
//   return (accumulator += currVal);
// }, 0); // can specify a different starting value
// console.log(balance);

// // Reduce to find MaxVal

// const maxVal = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// });
// console.log(maxVal);

// // Create Sum of Deposits in USD using method chaining
// const sumDeposit = movements
//   .filter(mov => mov > 0)
//   .map(mov => Math.round(mov * 1.1))
//   .reduce((sum, movUSD) => sum + movUSD, 0);
// console.log(sumDeposit);

// // find method - returns first result found in the array
// // console.log(movements.find(mov => mov < 0));

// // findIndex - returns the index of the first result found in the array

// // includes - checks for the existance of a thing

// // some - like include but supports conditions
// const anyDeposits = movements.some(mov => mov < 500);
// console.log(anyDeposits);

// // every - returns true if all elements meet requirements
// console.log(movements.every(mov => mov < 500));

// // Programmatically generate arrays
// // Empty array of size
// const x = new Array(7);
// console.log(x);
// // Fill'er up!
// //x.fill(1);
// x.fill(1, 3, 5); // fill with 1 starting at i=3 and ending at i=5
// console.log(x);

// // From function
// console.log(Array.from({ length: 7 }, (_, i) => i + 1));

// Title Case Using the Reduce Method
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log('an example of a conversion of title case using the reduce method');
console.log(convertTitleCase('an example of a conversion of title case using the reduce method'));
