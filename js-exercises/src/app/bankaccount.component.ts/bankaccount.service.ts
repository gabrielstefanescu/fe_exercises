import { Injectable } from '@angular/core';
import { BankAccount } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class BankAccountService {
   
  private _bankAccounts: BankAccount[] = [];
  
  get bankAccounts(): BankAccount[] {
    return this._bankAccounts;
  }
  addBankAccount(bankAccounts: BankAccount) {
    this._bankAccounts.push(bankAccounts);
  }
  
  deposit(x: number) {

  }

  withdrawal(x: number) {

  }
  // deposit(accountIndex: number, amount: number) {
  //   // Implement the deposit logic here, for example:
  //   if (accountIndex >= 0 && accountIndex < this._bankAccounts.length) {
  //     this._bankAccounts[accountIndex].deposit(amount);
  //   } else {
  //     // Handle the case when the account doesn't exist
  //     console.error('Invalid account index');
  //   }
  // }

  // withdrawal(accountIndex: number, amount: number) {
  //   // Implement the deposit logic here, for example:
  //   if (accountIndex >= 0 && accountIndex < this._bankAccounts.length) {
  //     this._bankAccounts[accountIndex].withdrawal(amount);
  //   } else {
  //     // Handle the case when the account doesn't exist
  //     console.error('Invalid account index');
  //   }
  // }

}
  