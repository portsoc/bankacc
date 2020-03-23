import { BankAcc } from "./bankacc.mjs";

const ba = new BankAcc( "Damien", 666, 100000, 23 );

function update(what, value) {
  document.querySelector(what).textContent = value;
}

function amount() {
  return document.querySelector('#amount').valueAsNumber;
}

function deposit() {
  ba.deposit( amount() );
  report(ba);
}

function withdraw() {
  ba.withdraw( amount() );
  report(ba);
}

function report(account) {
  update('#holder', ba.name);
  update('#acno', ba.number);
  update('#balance', ba.balance);
  update('#overdraft', ba.overdraft);
  update('#funds', ba.availableFunds);
  document.querySelector('#deposit').addEventListener('click', deposit);
  document.querySelector('#withdraw').addEventListener('click', withdraw);
}

function init() {
  report(ba);

}


window.addEventListener('load', init)