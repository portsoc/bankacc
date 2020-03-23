import { BankAcc } from "./bankacc.mjs";

const ba = new BankAcc( "Damien", 666, 100000, 23 );

console.log(ba.balance); // 23
report(ba);
ba.deposit(45);
console.log(ba.balance); // 68
report(ba);
ba.withdraw(10);
console.log(ba.balance); // 58
report(ba);

function report(account) {
  console.log(`
Account holder:  ${ba.name}
Account number:  ${ba.number}
Balance:         ${ba.balance}
Overdraft:       ${ba.overdraft}
Available funds: ${ba.availableFunds}`);
}