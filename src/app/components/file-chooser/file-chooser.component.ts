import {Component, OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {DocumentParsingService} from '../../services/document-parsing.service';
import {MatDialog} from '@angular/material/dialog';
import {SellAgreement} from '../../models/SellAgreement';
import {SellAgreementConfirmationComponent} from '../sell-agreement-confirmation/sell-agreement-confirmation.component';

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.css']
})
export class FileChooserComponent implements OnInit {

  documentImageUrl: string;
  showImage: boolean;
  documentImageFile: File;
  creationInProgress: boolean;

  constructor(private parseService: DocumentParsingService, private optionsSheet: MatBottomSheet, public agreementConfirmationDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showImage = false;
    this.creationInProgress = false;
  }

  openFileChooserSheet(): void {
    const uploadOptionRef = this.optionsSheet.open(ImageOptionUploadSheetComponent, {disableClose: false});
    this.renderImage(uploadOptionRef);
  }

  onDocumentValidated(isAccepted: boolean): void {
    if (isAccepted) {
      this.showImage = false;
      this.creationInProgress = true;
      this.parseService.getParsedDocument(this.documentImageFile).subscribe(agreement => {
        // this.delay(500);
        this.openAgreementConfirmation(agreement);
        this.showImage = true;
        this.creationInProgress = false;
      });
    } else {
      this.showImage = false;
      this.documentImageUrl = null;
    }
  }

  openAgreementConfirmation(agreement: SellAgreement): void {
    const dialogRef = this.agreementConfirmationDialog.open(SellAgreementConfirmationComponent, {
      width: '500px',
      data: agreement
    });

    dialogRef.afterClosed().subscribe(fixedAgreement => {
      if (fixedAgreement) {
        console.log(fixedAgreement);
      }
    });
  }

  private renderImage(uploadOptionRef: MatBottomSheetRef<ImageOptionUploadSheetComponent, any>): void {
    uploadOptionRef.afterDismissed().subscribe((documentImage) => {
      const reader = new FileReader();
      reader.readAsDataURL(documentImage);
      reader.onload = (event) => {
        this.documentImageFile = documentImage;
        this.documentImageUrl = event.target.result as string;
        this.showImage = true;
      };
    });
  }

  private delay(ms: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

@Component({
  selector: 'app-image-option-upload-sheet',
  templateUrl: './image-option-upload-sheet.html',
  styleUrls: ['./image-option-upload-sheet.css']
})
export class ImageOptionUploadSheetComponent {
  constructor(private uploadSheetMatBottomSheetRef: MatBottomSheetRef<ImageOptionUploadSheetComponent>) {
  }

  getImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.uploadSheetMatBottomSheetRef.dismiss(event.target.files[0]);
    }
  }
}
