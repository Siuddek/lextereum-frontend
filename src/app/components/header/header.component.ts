import { Component, OnInit } from '@angular/core';
import {BlockchainCommunicationService} from '../../services/blockchain-communication.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateAccountComponent} from '../create-account/create-account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  accountAddress: string;

  constructor(private blockChain: BlockchainCommunicationService, public createAccountDialog: MatDialog) { }

  ngOnInit(): void {
    this.blockChain.getAccounts().then(account => {
      if (typeof account !== 'undefined') {
        this.accountAddress = account;
      } else {
        this.accountAddress = 'failed to load account address';
      }
      console.log(account);
    });
  }

  onAccountCreation(): void {
    const dialogRef = this.createAccountDialog.open(CreateAccountComponent, {
      width: '500px'
    });
  }
}
