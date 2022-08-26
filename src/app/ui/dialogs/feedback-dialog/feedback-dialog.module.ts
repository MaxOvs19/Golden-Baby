import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { FeedbackDialogComponent } from './feedback-dialog.component';

@NgModule({
  declarations: [FeedbackDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [FeedbackDialogComponent],
})
export class FeedbackDialogModule {}
