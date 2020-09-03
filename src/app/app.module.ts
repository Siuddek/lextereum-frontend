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

@NgModule({
  declarations: [
    AppComponent,
    FileChooserComponent,
    ImageOptionUploadSheetComponent,
    SellAgreementConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  entryComponents: [
    FileChooserComponent,
    SellAgreementConfirmationComponent
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    MatBottomSheet,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
