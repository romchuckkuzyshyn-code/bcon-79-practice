// /**
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /**
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
// const Account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: Date.now(),
//       amount,
//       type,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(
//         `Недостатньо коштів для зняття ${amount}. Ваш баланс ${this.balance}`
//       );
//       return this.balance;
//     }
//     this.balance -= amount;
//     this.transactions.push(
//       this.createTransaction(amount, Transaction.WITHDRAW)
//     );
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find(num => num.id === id);
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     return this.transactions.reduce((total, transaction) => {
//       if (transaction.type === type) {
//         return total + transaction.amount;
//       }
//       return total;
//     }, 0);
//   },
// };

// console.log(Account.getBalance()); // очікується: 0

// Account.deposit(500);

// console.log(Account.getBalance()); // очікується: 500

// Account.withdraw(200);
// console.log(Account.getBalance()); // очікується: 300
// Account.withdraw(2000);
// console.log(Account.getBalance()); // очікується: 300
// Account.withdraw(1000);
// console.log(Account.getBalance()); // очікується: 300
// Account.withdraw(400);
// console.log(Account.getBalance()); // очікується: 300

// Account.withdraw(400);
// // очікується повідомлення про недостатньо коштів
// console.log(Account.getBalance()); // очікується: 300

// console.log(Account.transactions); // подивитись історію транзакцій

// const firstId = Account.transactions[0]?.id;
// console.log(Account.getTransactionDetails(firstId)); // очікується обʼєкт транзакції

// console.log(Account.getTransactionTotal(Transaction.DEPOSIT)); // очікується: 500
// console.log(Account.getTransactionTotal(Transaction.WITHDRAW)); // очікується: 200

const Operation = {
  ADD: "add",
  SPEND: "spend",
};

const Wallet = {
  cash: 0,
  operations: [],
  lastId: 0,

  createOperation(amount, type) {
    this.lastId += 1;
    return { amount, type, id: this.lastId };
  },

  addCash(amount) {
    this.cash += amount;
    this.operations.push(this.createOperation(amount, Operation.ADD));
  },

  spendCash(amount) {
    if (amount > this.cash) {
      console.log(`Have not money`);
      return this.cash;
    }
    this.cash -= amount;
    this.operations.push(this.createOperation(amount, Operation.SPEND));
  },

  getCash() {
    return this.cash;
  },

  getOperationById(id) {
    return this.operations.find(num => num.id === id);
  },

  getTotalByType(type) {
    return this.operations.reduce((acc, operation) => {
      if (operation.type === type) {
        acc += operation.amount;
      }
      return acc;
    }, 0);
  },
};

console.log(Wallet.getCash()); // 0

Wallet.addCash(300);
Wallet.addCash(200);
console.log(Wallet.getCash()); // 500

Wallet.spendCash(150);
console.log(Wallet.getCash()); // 350

Wallet.spendCash(1000); // Have not money
console.log(Wallet.getCash()); // 350

console.log(Wallet.operations); // подивитись всі операції

const firstOpId = Wallet.operations[0]?.id;
console.log(Wallet.getOperationById(firstOpId)); // перша операція

console.log(Wallet.getTotalByType(Operation.ADD)); // 500
console.log(Wallet.getTotalByType(Operation.SPEND)); // 150
