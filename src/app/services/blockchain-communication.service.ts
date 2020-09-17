import {Inject, Injectable} from '@angular/core';
import {WEB3} from '../configs/web3Provider';
import Web3 from 'web3';
import {environment} from '../../environments/environment';
import * as TruffleContract from 'truffle-contract';


@Injectable({
  providedIn: 'root'
})
export class BlockchainCommunicationService {

  private sellAgreementContract = require('lextereum-ethereum-contract/build/contracts/SellAgreementNotary.json');
  private account: string;

  constructor(@Inject(WEB3) private web3: Web3) {
  }

  async getAccounts(): Promise<string> {
    await this.web3.currentProvider;
    this.account = await this.web3.eth.getAccounts().then(accounts => accounts[0]);
    return this.account;
  }

  async notarizeSellAgreement(documentID: string, sellerID: string, buyerID: string, documentHash): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const agreementContract = TruffleContract(this.sellAgreementContract);
      agreementContract.setProvider(this.web3.currentProvider);
      agreementContract.deployed().then(instance => {
        return instance.notarizeSellAgreement(documentID, sellerID, buyerID, documentHash, {from: this.account});
      }).then(status => {
        if (status) {
          return resolve(true);
        }
      }).catch(error => {
        return reject(`Error in saving agreement in blockchain: ${error}`);
      });
    });
  }
}
