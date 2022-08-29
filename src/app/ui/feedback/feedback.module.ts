import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { InputModule } from '@ui/input';
import { DatePickerModule } from '@ui/date-picker';
import { ButtonModule } from '@ui/button';

import { FeedbackComponent } from './feedback.component';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    RouterModule,
    InputModule,
    DatePickerModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [FeedbackComponent],
})
export class FeedbackModule {}
