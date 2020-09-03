import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SellAgreement} from '../../models/SellAgreement';

@Component({
  selector: 'app-sell-agreement-confirmation',
  templateUrl: './sell-agreement-confirmation.component.html',
  styleUrls: ['./sell-agreement-confirmation.component.css']
})
export class SellAgreementConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<SellAgreementConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: SellAgreement) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
