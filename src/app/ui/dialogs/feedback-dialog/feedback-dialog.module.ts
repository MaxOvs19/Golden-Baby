import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { FeedbackDialogComponent } from './feedback-dialog.component';

@NgModule({
  declarations: [FeedbackDialogComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule],
  exports: [FeedbackDialogComponent],
})
export class FeedbackDialogModule {}
