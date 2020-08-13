import {Component, OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.css']
})
export class FileChooserComponent implements OnInit {

  documentImageUrl: string;
  showImage: boolean;

  constructor(private optionsSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.showImage = false;
  }

  openFileChooserSheet(): void {
    const uploadOptionRef = this.optionsSheet.open(ImageOptionUploadSheetComponent, {disableClose: false});
    this.renderImage(uploadOptionRef);
  }

  onDocumentValidated(isAccepted: boolean): void {
    if (isAccepted) {
      console.log(isAccepted);
    } else {
      this.showImage = false;
      this.documentImageUrl = null;
    }
  }

  private renderImage(uploadOptionRef: MatBottomSheetRef<ImageOptionUploadSheetComponent, any>): void {
    uploadOptionRef.afterDismissed().subscribe((documentImage) => {
      const reader = new FileReader();
      reader.readAsDataURL(documentImage);
      reader.onload = (event) => {
        this.documentImageUrl = event.target.result as string;
        this.showImage = true;
      };
    });
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
