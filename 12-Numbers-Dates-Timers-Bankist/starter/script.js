'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-05-01T17:01:17.194Z',
    '2024-05-04T23:36:17.929Z',
    '2024-05-05T14:20:37.822Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
let sorted = false;
const accounts = [account1, account2];
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
};
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Function Definitions
function createUsernames(accs) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
function formatMovDate(movDate, locale) {
  const calcDaysSince = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysSince = calcDaysSince(new Date(), movDate);
  if (daysSince === 0) return 'Today';
  if (daysSince === 1) return 'Yesterday';
  if (daysSince <= 7) return `${daysSince} days ago`;
  return new Intl.DateTimeFormat(locale).format(movDate);
}
function formatAmount(amt, locale, curr) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curr,
  }).format(amt);
}
function displayMovements(account, sort = false) {
  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (movement, i) {
    const movType = movement > 0 ? 'deposit' : 'withdrawal';

    const movDate = new Date(account.movementsDates[i]);
    const displayDate = formatMovDate(movDate, account.locale);
    const formatMov = formatAmount(movement, account.locale, account.currency);
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${movType}">${
      i + 1
    } ${movType}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatMov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
function displayTotalBal(account) {
  account.balance = account.movements.reduce((tot, mov) => (tot += mov), 0);
  labelBalance.textContent = formatAmount(
    account.balance,
    account.locale,
    account.currency
  );
}
function calcDisplaySummary(account) {
  const credits = account.movements
    .filter(mov => mov > 0)
    .reduce((sum, movUSD) => sum + movUSD, 0);
  labelSumIn.textContent = formatAmount(
    credits,
    account.locale,
    account.currency
  );
  const debits = Math.abs(
    account.movements
      .filter(mov => mov < 0)
      .reduce((sum, movUSD) => sum + movUSD, 0)
  );
  labelSumOut.textContent = formatAmount(
    debits,
    account.locale,
    account.currency
  );
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(int => int * (account.interestRate / 100)) // 1.2% interest rate on all credits
    .filter(int => int >= 1) // Only interest payments over 1 eur are paid
    .reduce((sum, int) => sum + int, 0);
  labelSumInterest.textContent = formatAmount(
    interest,
    account.locale,
    account.currency
  );
}
function updateUI(acc) {
  // Display Movements
  displayMovements(acc);

  // Display Balance
  displayTotalBal(acc);

  // Display Summary
  calcDisplaySummary(acc);
}
function startLogOutTimer() {
  const tick = () => {
    let mins = String(Math.trunc(time / 60)).padStart(2, '0');
    let secs = String(Math.trunc(time % 60)).padStart(2, '0');
    // print remaining time to UI
    labelTimer.textContent = `${mins}:${secs}`;
    // When time = 0, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      // display UI and Welcome Message
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  // Set time to 10 minutes
  let time = 600;
  // Call timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

// event handlers
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Get current Date/Time
    // Use Internationalization API
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // clear login input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    // display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amt = Number(inputTransferAmount.value);
  const recipient = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // Check for valid amounts and sufficient funds
  if (
    amt > 0 &&
    amt <= currentAccount.balance &&
    recipient &&
    currentAccount.username !== recipient?.username
  ) {
    // Push the transfer
    currentAccount.movements.push(-amt);
    recipient.movements.push(amt);
    // Push the timestamp
    currentAccount.movementsDates.push(new Date().toISOString());
    recipient.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amt = Math.floor(inputLoanAmount.value);
  // only grant loan if any deposits for over 10% of amt requested
  if (amt > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amt)) {
    // simulate approval using timeout
    setTimeout(function () {
      // add positive movement to account
      currentAccount.movements.push(amt);
      // Push the timestamp
      currentAccount.movementsDates.push(new Date().toISOString());
      console.log('Receiving Loan');
    }, 2500);
  }
  // update UI
  inputLoanAmount.value = '';
  updateUI(currentAccount);
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // Check that inputs match current account info
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // Find account that matches the inputs
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1); // Delete user from data
  }
  // Hide UI
  inputClosePin.value = inputCloseUsername.value = '';
  containerApp.style.opacity = 0;
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// Main
let currentAccount, timer;
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
createUsernames(accounts);

// Total Balance across all accounts
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

const overallBal = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

// Find total of all deposits in the bank
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

// Find total of all withdrawals in the bank
const bankWithdrawalSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);

// Count all deposits over 1000 using reduce
const numDeposits100 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

// Create a new object using reduce
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Remainder (modular) operator
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// // Create a Date
// const now = new Date();
// console.log(now);
// console.log(new Date(account1.movementsDates[0]));
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // UTC Timestamp
// console.log(Date.now());
