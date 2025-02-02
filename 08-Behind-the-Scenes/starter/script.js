'use strict';
// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   function printAge() {
//     const output = `${firstName},  you are ${age} years old, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `You are a millenial, ${firstName}!`;
//       console.log(str);
//     }
//   }
//   printAge();
//   return age;
// }
// let firstName = 'Chabi';
// calcAge(1991);

// console.log(this);
// const chad = {
//   birthYear: 1991,
//   calcage: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);
//   },
// };
// chad.calcage();

// const knilly = {
//   birthYear: 2017,
// };
// knilly.calcage = chad.calcage;
// knilly.calcage();

// const f = chad.calcage;
// f();

// var fName = 'Chabi';
// const chad = {
//   fName: 'Chad',
//   birthYear: 1991,
//   calcage: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);
//     // solution 1 - preserve this as self
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
//     // };

//     //solution 2 - use an arrow func, it will inheret this
//     const isMillenial = () => {
//       console.log(this.birthYear >= 1981 && self.birthYear <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.fName}`);
//   },
// };
// chad.greet();
// chad.calcage();

// Primatives
// let age = 32;
// let oldAge = age;
// age = 33;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Chabi',
//   age: 32,
// };

// // Objects
// const friend = me;
// friend.age = 27;
// console.log('Friend: ', friend);
// console.log('Me: ', me);

// primative types
let lName = 'Burke';
let maidenName = lName;
lName = 'Secrets';
console.log(lName, maidenName);

// reference types
const jess = {
  fName: 'Jessi',
  lName: 'Blocher',
  age: 30,
};

const marriedJess = jess;
marriedJess.lName = 'Travaly';
console.log('jess: ', jess);
console.log('married: ', marriedJess);

const jessi = {
  fName: 'Jessi',
  lName: 'Blocher',
  age: 30,
  fam: ['Seth', 'Sarah'],
};
const jess2 = Object.assign({}, jessi); // Shallow Copy - only copies uppermost level
jess2.lName = 'Travaly';
jess2.fam.push('Alex');
jess2.fam.push('Chabi');
console.log(jessi);
console.log(jess2);
