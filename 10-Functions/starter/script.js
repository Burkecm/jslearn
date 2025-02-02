'use strict';
// // Default Parameters
// const bookings = [];
// // set the defaults in the prototype
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // The old way (ES5): Use shortcircuiting
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   price;
//   const booking = { flightNum, numPassengers, price };
//   bookings.push(booking);
// };
// console.log(bookings);
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// // cannot skip params, but CAN specify them as falsey to mimic that
// createBooking('LH123', undefined, 400);

// // Passing by Reference vs Passing by Value
// const flight = 'LH234';
// const chad = {
//   name: 'Chad Burke',
//   passport: 12234567,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 12234567) {
//     alert('Check In!');
//   } else {
//     alert('Wrong Passport');
//   }
// };
// checkIn(flight, chad);
// console.log(flight, chad);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(chad);
// console.log(chad.passport);
// checkIn(flight, chad);

// // First Class and higher Order Functions
// // First Class: Functions act as Values, because they are a type of object
// // Higher Order Functions: Functions that recieves a Function as an arg, returns a function, or both

// const oneWord = function (str) {
//   return str.replaceAll(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Transformed String: ${fn(str)}
//   Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('✋');
// };

// document.addEventListener('click', high5);

// // Functions that return functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey!');
// greeterHey('Jonas');
// greeterHey('Chad');
// greet('Hiya')('Bud');

// const greet = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };
// greet('Hello')('Chad');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, passengerName) {
//     console.log(
//       `${passengerName} booked a ticket for ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name: this.airline,
//     });
//   },
// };

// lufthansa.book(239, 'Chad');
// lufthansa.book(635, 'John Smith');

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // This won't work becasue the book function uses the this keyword
// //book('23', 'Serena Willaims');

// // Call method allows us to specify a different target for the this keyword
// book.call(lufthansa, 23, 'Serena Williams');
// book.call(euroWings, 369, 'Rey Mysterio');

// // Apply method does the sae, but also allows us to pass arguments as an array
// // Though it is not used particularly often anymore
// const flightData = [123, 'The Count'];
// book.apply(euroWings, flightData);
// // Instead, we can use the spread operator with the call method
// book.call(lufthansa, ...flightData);
// console.log(lufthansa.bookings);

// // The Bind Method
// // Returns a new function with the this keyword defined
// const bookEW = book.bind(euroWings);
// bookEW(29, 'Stephen Spielberg');
// // Can also be used for partial application, aka pre-setting arguments
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Flight23Fan');
// console.log(euroWings.bookings);

// // With EventListeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };
// document.querySelector('.buy'),
//   addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Let's add Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// Immediately Invoked Function Expression (IIFE)
// a function that executes once and then ceases to exist.
// wrap the function in parens to trick JS into thinking it's an expression
// (function () {
//   console.log('This code will never run again');
// })(); // immediately call it by adding ()
// // also works with arrow function notation
// (() => console.log('This code will never run again part 2'))();

// // Closures
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();
