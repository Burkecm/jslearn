/*let js = "amazing";
//console.log(40+7+92-40);

console.log(js)
// "let" keyword declares a variable
let fName = "Jonas"
console.log(fName)

let jsIsFun = true;
console.log(jsIsFun)
console.log(typeof true);
console.log(typeof jsIsFun);
let fName = 'Chad';
// console.log(typeof fName);
fName = 32;
console.log(typeof fName);
let lName;
console.log(lName)*/

// let keyword declares a variable whose value will later change

// const keyword declares a constant, whose value will NOT change
// A constant's immutability is enforced
// cannot be declared without being initialized

// var keyword is deprecated, functions as let on a surface level
// DO NOT USE

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// // a lesson on operator precedence(order or operations)
// // https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge)

// const fName = "Jonas";
// const job = "Teacher";
// const birthYear = 1991;
// const currYear = 2037;
// const jonas = "I'm " + fName + ", a " +
// (currYear - birthYear) + " year old " + job + ".";
// console.log(jonas)

// // Template Literals use backticks(``) and references variables/expressions using ${}
// const jonasNew = `I'm ${fName}, a ${currYear-birthYear} year old ${job}.`;
// console.log(jonasNew)
// console.log(`String literals allow
// multiline strings with ease!`);

// // if/else structures!
// const age = 15;
// if (age >= 18) {
//   console.log("Sarah is old enough to drive!👍🚗");
// } else {
//   let yearsLeft = 18 - age;
//   console.log(`Sorry, Sarah, try again in ${yearsLeft} years🥲`);
// }

// const birthYear = 2014;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// console.log("19" - 5);

// const faveNum = Number(prompt("Wha is your favorite number?"));

// const hasLicense = true;
// const hasGoodVision = true;
// if (hasLicense && hasGoodVision) {
//   console.log("Sarah is allowed to drive!");
// } else {
//   console.log("Someone else should drive.");
// }

// const isTired = false;
// if (hasLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is allowed to drive!");
// } else {
//   console.log("Someone else should drive.");
// }

const age = 23;
const drink = age >= 18 ? "wine" : "water";
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
