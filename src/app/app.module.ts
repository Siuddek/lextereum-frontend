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

@NgModule({
  declarations: [
    AppComponent,
    FileChooserComponent,
    ImageOptionUploadSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule
  ],
  entryComponents: [
    FileChooserComponent
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    MatBottomSheet,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
