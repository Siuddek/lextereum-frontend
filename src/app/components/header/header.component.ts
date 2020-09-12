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
    this.blockChain.getAccounts().then(accounts => {
      if (typeof accounts !== 'undefined' && accounts.length > 0) {
        this.accountAddress = accounts[0];
      } else {
        this.accountAddress = 'failed to load account address';
      }
      console.log(accounts);
    });
  }

  onAccountCreation(): void {
    const dialogRef = this.createAccountDialog.open(CreateAccountComponent, {
      width: '500px'
    });
  }
}
