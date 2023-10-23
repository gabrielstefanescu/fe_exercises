import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../classes';
import { BankAccountService } from './bankaccount.service';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  //styleUrls: ['./classes.component.css'],
})
export class BankAccountComponent implements OnInit {
    bankAccounts: BankAccount[] = [];
    
  constructor(private bankAccountService: BankAccountService) {}
  
  ngOnInit(): void {
    this.bankAccountService.addBankAccount (new BankAccount('John', 'Doe', 123456789, 1000));
    //this.bankAccountService.deposit(0,20);
    //this.bankAccountService.deposit(20);
    //this.bankAccountService.withdrawal(600);
    //this.bankAccountService.withdrawal(600);


    this.bankAccounts = this.bankAccountService.bankAccounts;
  }
  // depositAmount: number = 20;
  // accountIndex: number = 0;
  // withdrawnAmount: number = 600;
}