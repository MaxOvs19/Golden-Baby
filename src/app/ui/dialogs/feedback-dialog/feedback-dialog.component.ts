import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
})
export class FeedbackDialogComponent {
  constructor(public dialogRef: MatDialogRef<FeedbackDialogComponent>) {}

  public close(): void {
    this.dialogRef.close(true);
  }
}
