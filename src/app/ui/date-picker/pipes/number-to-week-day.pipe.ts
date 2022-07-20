import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWeekDay',
})
export class NumberToWeekDayPipe implements PipeTransform {
  public transform(value: number): Date {
    const date = new Date();
    date.setDate(value + 1);

    return date;
  }
}
