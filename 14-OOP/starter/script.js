// 'use strict';

// // //Constructor Functions
// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // Do not create methods inside of a constructor!!
// //   //   this.calcAge = function () {
// //   //     console.log(2037 - this.birthYear);
// //   //   };
// //   //   utilyze inheritance instead
// // };
// // // 1. New empty object {} is created
// // // 2. function is called, this  = {}
// // // 3. {} is linked to a Prototype
// // // 4. {} is automatically returned from constructor function
// // const chad = new Person('Chad', 1991);
// // console.log(chad);

// // // Prototypes
// // // Every function has a prototype property. We can add functions to the constructor prototype
// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // Person.prototype.species = 'Homo Sapiens';
// // // console.log(chad.hasOwnProperty('firstName')); // Check for inherent property
// // // console.log(chad.hasOwnProperty('species')); // does not see inhereted properties

// // // CODING CHALLENGE #1
// // // 1. Use a constructore function to implement a Car with make and a speed property
// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // // 2. Implement an accellerate function
// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is traveling at ${this.speed} km/h`);
// // };

// // // 3. Implement a brake function
// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is traveling at ${this.speed} km/h`);
// // };

// // // 4. Create 2 car objects, call each function on each of them.
// // // Data
// // // Car 1: BMW going 120 kmh
// // // Car 2: Merceded going 95kmh
// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);

// // console.log(`The initial speed of ${bmw.make} is ${bmw.speed} km/h`);
// // bmw.accelerate();
// // bmw.brake();

// // console.log(`The initial speed of ${mercedes.make} is ${mercedes.speed} km/h`);
// // mercedes.accelerate();
// // mercedes.accelerate();
// // mercedes.brake();

// // // ES6 classes
// // const PersonCl = class {}
// // 1. Classes are not hoisted
// // 2. Classes are "first-class citizens"
// // 3. Classes act as if in strict mode even if not enabled for the entire script
// class PersonCl {
//   constructor(fullname, birthYear) {
//     this.fullname = fullname;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstname}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // can use setters as data validation
//   set fullname(name) {
//     if (name.includes(' ')) this._fullname = name;
//     else console.log(`${name} is not a full name!`);
//   }
//   get fullname() {
//     return this._fullname;
//   }
// }

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter);
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstname}`);
// // };
// const chad = new PersonCl('Chad', 1991);
// console.log(chad);
// //chad.greet();

// // Getters and Setters for objects. Can also exist in Classes
// // const account = {
// //   owner: 'Chad',
// //   movements: [200, 530, 120, 300],
// //   get latest() {
// //     // note the "get" keyword
// //     return this.movements.slice(-1).pop();
// //   },
// //   // Can have either or both setter/getter
// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // account.latest = 50;
// // console.log(account.latest);
// // console.log(chad.age);

/* Object.Create 
// Assigns the prototype of the created object to the passed-in object
// Useful for inheritance between classes (the old way) 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
const stephen = Object.create(PersonProto);
stephen.name = 'Stephen';
stephen.birthYear = 2002;
stephen.calcAge();
console.log(stephen);*/

/* Coding Challenge #2 
 1. Recreate the Car class using ES6 methodology
 2. Add a getter called speedUS that retuirns the speed in MPH
 3. Ass a setter called speedUS which sets the current speed in MPH but converts to KMH first
 4. Create a new car and experiemtn with the setter/getter  
 class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is traveling at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is traveling at ${this.speed} km/h`);
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 120;
console.log(ford);
*/

/* Inheritance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Link the child prototype to parent
Student.prototype = Object.create(Person.prototype);
// Redirect constructor to self rather than parent
Student.prototype.constructor = Student;

const mike = new Student('Mike', 1991, 'CompSci');
console.log(mike);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
mike.introduce();
mike.calcAge();
*/

/* Coding Challenge #3 
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is traveling at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is traveling at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is travelling at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
*/

/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstname}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // can use setters as data validation
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Super must happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student, I feel like I'm ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentCl('Martha Jones', 2012, 'Compsci');
console.log(martha);
martha.introduce();
martha.calcAge();
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const stephen = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jason', 1996, 'PoliSci');
jay.introduce();
jay.calcAge();
*/

/*
class Account {
  // Public fields (instance)
  locale = navigator.language;
  // Private fields (instance)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }
  // Private Methods
  // Use # later, but currently does not work
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// acc1.deposit(500);
// acc1.withdraw(250);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

/* Coding Challenge #4 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is traveling at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is traveling at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is travelling at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(40).accelerate();
console.log(rivian);
console.log(rivian.speedUS);
