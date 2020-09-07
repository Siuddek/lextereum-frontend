import { Component, OnInit } from '@angular/core';
import {BlockchainCommunicationService} from '../../services/blockchain-communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  accountAddress: string;

  constructor(private blockChain: BlockchainCommunicationService) { }

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

}
