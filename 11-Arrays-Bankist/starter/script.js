'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let sorted = false;
const accounts = [account1, account2, account3, account4];

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
function displayMovements(movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (movement, i) {
    const movType = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${movType}">${i + 1} ${movType}</div>
          <div class="movements__value">${movement}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
function displayTotalBal(account) {
  account.balance = account.movements.reduce((tot, mov) => (tot += mov), 0);
  labelBalance.textContent = `${account.balance} €`;
}
function calcDisplaySummary(account) {
  const credits = account.movements.filter(mov => mov > 0).reduce((sum, movUSD) => sum + movUSD, 0);
  labelSumIn.textContent = `${credits} €`;
  const debits = Math.abs(
    account.movements.filter(mov => mov < 0).reduce((sum, movUSD) => sum + movUSD, 0)
  );
  labelSumOut.textContent = `${debits} €`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(int => int * (account.interestRate / 100)) // 1.2% interest rate on all credits
    .filter(int => int >= 1) // Only interest payments over 1 eur are paid
    .reduce((sum, int) => sum + int, 0);
  labelSumInterest.textContent = `${interest} €`;
}
function updateUI(acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  displayTotalBal(acc);

  // Display Summary
  calcDisplaySummary(acc);
}

// event handlers
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // clear login input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    // display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amt = Number(inputTransferAmount.value);
  const recipient = accounts.find(acc => acc.username === inputTransferTo.value);
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
  }
  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amt = Number(inputLoanAmount.value);
  // only grant loan if any deposits for over 10% of amt requested
  if (amt > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amt)) {
    // add positive movement to account
    currentAccount.movements.push(amt);
    console.log('Receiving Loan');
  }
  // update UI
  inputLoanAmount.value = '';
  updateUI(currentAccount);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // Check that inputs match current account info
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // Find account that matches the inputs
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1); // Delete user from data
  }
  // Hide UI
  inputClosePin.value = inputCloseUsername.value = '';
  containerApp.style.opacity = 0;
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el =>
    Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// Main
let currentAccount;
createUsernames(accounts);

// Total Balance across all accounts
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBal = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Find total of all deposits in the bank
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// Find total of all withdrawals in the bank
const bankWithdrawalSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankWithdrawalSum);

// Count all deposits over 1000 using reduce
const numDeposits100 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDeposits100);

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
console.log(deposits, withdrawals);
