import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../input';
import { YearsComponent } from './components/years/years.component';
import { DatePickerComponent } from './date-picker.component';
import { ArrowLeftComponent } from './icons/arrow-left/arrow-left.component';
import { ArrowRightComponent } from './icons/arrow-right/arrow-right.component';
import { CalendarComponent } from './icons/calendar/calendar.component';
import { NumberToWeekDayPipe } from './pipes/number-to-week-day.pipe';

@NgModule({
  declarations: [
    DatePickerComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
    YearsComponent,
    CalendarComponent,
    NumberToWeekDayPipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModule],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}
