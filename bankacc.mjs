export class BankAcc {

  // declare private fields
  // each instance has it's own intern
  #name;
  #number;
  #overdraft;
  #balance;

  constructor(name, number, overdraft, balance) {
    this.#name = name;
    this.#number = number;
    this.#overdraft = overdraft;
    this.#balance = balance;
  }

  /* GETTERS */

  get availableFunds() {
    return this.#balance + this.#overdraft;
  }

  get balance() {
    return this.#balance;
  }

  get name() {
    return this.#name;
  }

  get number() {
    return this.#number;
  }

  get overdraft() {
    return this.#overdraft;
  }

  /* MUTATORS */

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.availableFunds < amount) {
      return false;
    }
    this.#balance -= amount;
    return true;
  }

};