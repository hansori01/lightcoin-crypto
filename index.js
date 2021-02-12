class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
};

// transaction superclass
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
};

//deposit object class
class Deposit extends Transaction {
  commit() {
    this.account.balance += this.amount;
  }
};

//withdraw object class
class Withdrawal extends Transaction {
  commit() {
    this.account.balance -= this.amount;
  }
};




// DRIVER CODE BELOW

const myAccount = new Account("snow-patrol");
// console.log(myAccount)

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1: Withdrew ', t1.amount + ' from ' + myAccount.username + `. \n\t\t\t\t\t\t Current Balance: ${myAccount.balance}.`);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2: Withdrew', t2.amount + ' from ' + myAccount.username + `. \n\t\t\t\t\t\t Current Balance: ${myAccount.balance}.`);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3: Deposited', t3.amount + ' to ' + myAccount.username + `. \n\t\t\t\t\t\t Current Balance: ${myAccount.balance}.`);

console.log('Balance:', myAccount.balance);
