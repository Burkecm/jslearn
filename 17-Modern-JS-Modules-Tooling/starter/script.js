// Named Imports
import {
  addToCart,
  totalPrice as price,
  totalQuantity as quantity,
} from './shoppingCart.js';
// console.log('Importing Modules');
// addToCart('Apple', 2);
// console.log(totalPrice, totalQuantity);
// Import All
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// // Default Import
// import add, { cart } from './shoppingCart.js';
// add('lemon', 3);
// console.log(cart);

// // Top-level await blocks
// // const res = await fetch('https://jsonplaceholder.typicode.com//posts');
// // const data = await res.json();
// const getLastPost = async function (params) {
//   const res = await fetch('https://jsonplaceholder.typicode.com//posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// // Quick and Dirty
// const lastPost = getLastPost();
// console.log(lastPost);
// lastPost.then(last => console.log(last));
// // Cleaner Method
// const lastPost2 = await getLastPost();
// console.log(lastPost2);
//import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash';
import 'core-js/stable';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) module.hot.accept();

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}
const Jonas = new Person('Jonas');

console.log('Jonas' ?? null);
console.log(state.cart.find(el => el.quantity <= 2));
