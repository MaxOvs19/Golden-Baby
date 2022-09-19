import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '@ui/button';
import { DatePickerModule } from '@ui/date-picker';
import { InputModule } from '@ui/input';

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
  ],
  exports: [FeedbackComponent],
})
export class FeedbackModule {}
