import {Inject, Injectable, OnInit} from '@angular/core';
import {WEB3} from '../configs/web3Provider';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class BlockchainCommunicationService {

  constructor(@Inject(WEB3) private web3: Web3) {
  }

  async getAccounts(): Promise<string[]> {
    await this.web3.currentProvider;
    return await this.web3.eth.getAccounts();
  }
}
