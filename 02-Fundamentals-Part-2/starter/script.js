// "use strict";

// // // let hasDriversLicense = false;
// // // const passTest = true;

// // // if (passTest) hasDriversLicense = true;
// // // if (hasDriversLicense) {
// // //   console.log("I can drive!");
// // // }

// // // function logger() {
// // //   console.log("My name is Chad");
// // // }

// // // function fruitJuicer(apples, bananas) {
// // //   console.log(apples, bananas);
// // //   const juice = `Juice with ${apples} apples and ${bananas} bananas`;
// // //   return juice;
// // // }

// // // console.log(fruitJuicer(2, 3));

// // // Function Declaration
// // function calcAge1(birthYear) {
// //   return 2037 - birthYear;
// // }
// // const age1 = calcAge1(1991);
// // console.log(age1);

// // // Function Expression
// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };
// // console.log(calcAge2);
// // console.log(calcAge2(1991));

// // // Arrow Functions
// // const calcAge3 = (birthYear) => 2037 - birthYear;
// // console.log(calcAge3(1991));

// // const yearsUntilRetirement = (fName, birthyear) => {
// //   const age = 2037 - birthyear;
// //   const retirement = 65 - age;
// //   //return retirementAge - age;
// //   return `${fName} retires in ${retirement} years`;
// // };

// // console.log(yearsUntilRetirement("Chad", 1991));

// // Objects
// const chad = {
//   firstName: "Chad",
//   lastName: "Burke",
//   age: 2037 - 1991,
//   job: "developer",
//   friends: ["Austin", "Libby"],
// };

// console.log(chad.friends);

// // bracket notation
// const question = prompt("What do you want to know about me?");
// console.log(question);
// console.log(chad[question]);

// // Can add elements to an object on the fly
// chad.location = "Potsdam";
// console.log(chad.location);

// //challenge
// console.log(
//   `${chad.firstName} has ${chad.friends.length} friends, and his best friend is named ${chad.friends[0]}.`
// );

const chad = {
  firstName: "Chad",
  lastName: "Burke",
  birthYear: 1991,
  job: "developer",
  friends: ["Austin", "Libby"],
  hasDriversLicense: true,
  calcAge: function (birthYear) {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has a" : "doesn't have a"
    } driver's license.`;
  },
};

console.log(chad.getSummary());
