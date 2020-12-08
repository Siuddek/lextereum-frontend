import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileChooserComponent, ImageOptionUploadSheetComponent} from './components/file-chooser/file-chooser.component';
import {MatButtonModule} from '@angular/material/button';
import {MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {Overlay} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { SellAgreementConfirmationComponent } from './components/sell-agreement-confirmation/sell-agreement-confirmation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FileChooserComponent,
    ImageOptionUploadSheetComponent,
    SellAgreementConfirmationComponent,
    HeaderComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  entryComponents: [
    FileChooserComponent,
    SellAgreementConfirmationComponent,
    CreateAccountComponent
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    MatBottomSheet,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
