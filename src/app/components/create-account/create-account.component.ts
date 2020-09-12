import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserAccount} from '../../models/UserAccount';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{

  accountForm: FormGroup;
  userAccount: UserAccount;

  ngOnInit(): void {
    this.userAccount = {name: '', surname: '', phone: '', email: '', id: ''};
    this.accountForm = new FormGroup({
      name: new FormControl(this.userAccount.name, [Validators.required]),
      surname: new FormControl(this.userAccount.surname, [Validators.required]),
      phone: new FormControl(this.userAccount.phone, [Validators.required]),
      email: new FormControl(this.userAccount.email, [Validators.required]),
      userid: new FormControl(this.userAccount.id, [Validators.required])
    });
  }

  constructor(public dialogRef: MatDialogRef<CreateAccountComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
