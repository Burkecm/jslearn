'use strict';

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// function checkDogs(dogsJulia, dogsKate) {
//   // fix Julia's data
//   const dogsJuliaCopy = [...dogsJulia];
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   const dogs = [...dogsJuliaCopy, ...dogsKate];
//   dogs.forEach(function (dog, i) {
//     const mess =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult.`
//         : `Dog number ${i + 1} is still a puppy!`;
//     console.log(mess);
//   });
// }
// let jData = [3, 5, 2, 12, 7];
// let kData = [4, 1, 15, 8, 3];
// //checkDogs(jData, kData);

// jData = [9, 16, 6, 8, 3];
// kData = [10, 5, 6, 1, 4];
// checkDogs(jData, kData);

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (dogAges) {
//   const humanAgesRaw = dogAges.map(function (dogAge) {
//     return dogAge <= 2 ? 2 * dogAge : dogAge * 4 + 16;
//   });
//   const humanAges = humanAgesRaw.filter(function (humanAge) {
//     return humanAge >= 18;
//   });
//   const average =
//     humanAges.reduce(function (sum, humanAge) {
//       return (sum += humanAge);
//     }) / humanAges.length;
//   return average;
// };

// const calcAverageHumanAgeChain = dogAges =>
//   dogAges
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : dogAge * 4 + 16))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((avg, humanAge, _, arr) => (avg += humanAge / arr.length), 0);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// console.log('_________');
// console.log(calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Formula:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
dogs.forEach(dog => (dog.recPortion = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recPortion ? 'much' : 'little'}`
);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recPortion)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatToolittle = dogs
  .filter(dog => dog.curFood < dog.recPortion)
  .flatMap(dog => dog.owners);
console.log(ownersEatToolittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatToolittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recPortion));

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
const dogEatingOkay = dog =>
  dog.curFood > dog.recPortion * 0.9 && dog.curFood < dog.recPortion * 1.1;
console.log(dogs.some(dogEatingOkay));

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter(dogEatingOkay);
console.log(dogsEatingOkay);
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
const dogsSorted = dogs.slice().sort((a, b) => a.recPortion - b.recPortion);
console.log(dogsSorted);
