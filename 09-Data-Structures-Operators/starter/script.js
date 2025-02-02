'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will arrive at ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`enjoy your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Depot St',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [primary, , secondary] = restaurant.categories;
// console.log(primary, secondary);

// [primary, secondary] = [secondary, primary];
// console.log(primary, secondary);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // nested destructuring
// const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // setting default vals while destructuring
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // destructuring Objects
// const { rName, openingHours, categories } = restaurant;
// console.log(rName, openingHours, categories);

// //Default Vals
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 990;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // spread operator to join 2 arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1: "),
//   prompt('Ingredient 2: '),
//   prompt('Ingredient 3: '),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // spread op also works on objects
// const newRestaurant = { ...restaurant, founder: 'Guiseppe', founded: 1991 };
// console.log(newRestaurant);
// // can be used to shallow copy
// const secondRestaurant = { ...restaurant };

// // Rest Pattern and Parameters - reverse spread op
// // Spread op goes on the right side of the =
// const arr = [1, 2, ...[3, 4]];
// //Rest goes on the left
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // all together now!
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // rest for function args
// const add = function (...nums) {
//   let t = 0;
//   for (let i = 0; i < nums.length; i++) {
//     t += nums[i];
//   }
//   console.log(t);
// };
// add(2, 3);
// add(1, 2, 3, 4, 5, 5, 6);
// const x = [25, 5, 3];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'bo', 'spinach');

// // Short circuiting with && / ||
// // logical ops can use or return any data type
// // the or (||) operator will always return the first truthy operand, else last operand
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // the and (&&) operator will always return the first falsey operand, else last operand
// console.log(1 && 4);
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Cheese', 'Pepperoni', 'Onion');
// }
// restaurant.orderPasta && restaurant.orderPasta('Chicken', 'Red Onion', 'Bacon');

// // nullish coalescing operator acts as OR, treating 0 and '' as truthy values
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// // logical assignment operators
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giani',
// };
// // or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1, rest2);

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1, rest2);

// // nullish assignment op
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1, rest2);

// // AND assignment op
// rest1.owner &&= '<Anonymous>';
// rest2.owner &&= '<Anonymous>';
// console.log(rest1, rest2);

// // the for-of loop
// const menuFull = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menuFull) {
//   console.log(item);
// }

// // enhanced object literals - property names can now be conputed as of ES6

// // Optional chaining (?.)
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const isOpen = restaurant.openingHours[day]?.open ?? 'closed';
//   // if (isOpen) {
//   console.log(`${restaurant.rName} is open at ${isOpen} on ${day}!`);
//   // }
// }

// // ?. on methods: goes between methodname and params
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // for arrays
// const users = [{ name: 'Chabi', email: 'email@address.com' }];
// console.log(users[0]?.name ?? 'user array is empty');

// // looping over objects, keys, and entries

// // prop names
// const props = Object.keys(openingHours);
// console.log(props);
// let openStr = `we are open ${props.length} days a week!`;
// for (const day of props) {
//   openStr += ` ${day},`;
// }
// // console.log(openStr);

// //prop vals
// const hours = Object.values(openingHours);
// console.log(hours);

// //prop "entries"
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

// // Sets - all unique values, no repeats, order doesn't matter
// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('Chabi'));
// console.log(orderSet.size);
// // check if element in set
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('garlic bread'));
// //add element to set
// orderSet.add('garlic bread');
// orderSet.add('garlic bread');
// orderSet.delete('risotto');
// console.log(orderSet);
// //orderSet.clear();
// // sets are iterable, so we can loop over them
// for (const order of orderSet) {
//   console.log(order);
// }
// // sets are useful for removing duplicates of arrays
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Maps - keys can be any data type, not just strings like for Objects
// const rest = new Map();
// rest.set('name', 'Ristaurante Italiano');
// rest.set(1, 'Firenze');
// console.log(rest.set(2, 'Roma'));
// // set returns the Map, we can use this to chain calls
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are Closed!');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const currTime = 21;
// console.log(rest.get(rest.get('open') <= currTime <= rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set([1, 2], 'test');
// console.log(rest);
// console.log(rest.size);
// // rest.clear()
// // can use objects as keys!
// rest.set(document.querySelector('h1'), 'heading');

// // iterating over maps
// const question = new Map([
//   ['question', 'what is the best prog lang in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'You got it!'],
//   [false, 'Try again...'],
// ]);
// console.log(question);

// // converting objects to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, val] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${val}`);
//   }
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(answer === question.get('correct')));

// // Strings work much like arrays
// const airline = 'Delta Airlines';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log('B737'[0]);
// // String Methods
// console.log(airline.length);
// console.log(airline.indexOf('l'));
// console.log(airline.lastIndexOf('l'));
// console.log(airline.lastIndexOf('Air'));
// // slice method
// console.log(airline.slice(4));
// console.log(airline.slice(4, 9)); // end param non inclusive
// // extract first word
// console.log(airline.slice(0, airline.indexOf(' ')));
// // last word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(`You've got a middle seat. Womp Womp`);
//   } else {
//     console.log(`You win!`);
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // other String Methods
// // string.trim
// // string.toLowerCase
// // string.ToUppercase

// // string replace
// // const priceGB = '288,97E';
// // const priceUS = priceGB.replace('E', 'USD').replace(',', '.');
// // console.log(priceUS);
// // // replaceAll is a function as well, or we can use regex with replace
// // // includes
// // // startsWith
// // // endsWith

// // const checkBaggage = function (items) {
// //   const baggage = items.toLowerCase();
// //   if (baggage.includes('knife') || baggage.includes('gun')) {
// //     console.log('JAIL!!!');
// //   } else {
// //     console.log('Welcome aboard!');
// //   }
// // };
// // checkBaggage('I have a laptop, some food, and pocket knife');
// // checkBaggage('socks and a camera');
// // checkBaggage('I brought some snacks and a gun to protect them');

// // string.split(delim) splits a string around a delimiter into an array
// console.log('a+very+nice+string'.split('+'));
// console.log('Chad Burke'.split(' '));
// const [fName, lName] = 'Chad Burke'.split(' ');
// console.log(fName, lName);
// // string.join(delim)
// console.log(['Mr.', fName, lName].join(' '));

// // fnc to properly capitalize a fullname
// const capName = function (fullName) {
//   const splitNames = fullName.toLowerCase().split(' ');
//   const fixedNames = [];
//   for (let i = 0; i < splitNames.length; i++) {
//     fixedNames.push(
//       splitNames[i].replace(splitNames[i][0], splitNames[i][0].toUpperCase())
//     );
//   }
//   const fixedName = fixedNames.join(' ');
//   console.log(fixedName);
// };
// capName('CHAD chabi michael Burke');

// // string.padStart(len, char)
// // string.padEnd(len, char)

// // mask all but last 4 numbers of a credit card
// const maskCC = function (ccNum) {
//   const num = ccNum + '';
//   const lastFour = num.slice(-4);
//   return lastFour.padStart(num.length, '*');
//   //console.log(lastFour);
// };
// console.log(maskCC(83647397482903));
// console.log(maskCC('836473974829037467'));

// //string.repeat
// const message = 'Bad Weather... all departures delayed...';
// console.log(message.repeat(5));

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getAirportCode = str => str.slice(0, 3).toUpperCase();
for (const [i, flight] of flights.split('+').entries()) {
  const [status, depart, arrive, time] = flight.split(';');
  const output = `${
    status.startsWith('_Delayed') ? '⛔' : ''
  }${status.replaceAll('_', ' ')} from ${getAirportCode(
    depart
  )} to ${getAirportCode(arrive)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
