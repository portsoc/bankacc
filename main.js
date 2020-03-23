import { BankAcc } from "./bankacc.mjs";

const ba = new BankAcc( "Damien", 666, 100000, 23 );

report(ba);

ba.deposit(45);
report(ba);

ba.withdraw(10);
report(ba);

function report(account) {
  console.log(`
Account holder:  ${ba.name}
Account number:  ${ba.number}
Balance:         ${ba.balance}
Overdraft:       ${ba.overdraft}
Available funds: ${ba.availableFunds}`);
}