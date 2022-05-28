import { tap, switchMap, toArray } from 'rxjs/operators';
import { BehaviorSubject, Observable, range, zip } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { addMonths, endOfMonth, startOfMonth, subMonths } from 'date-fns';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Mode } from './types/mode.type';

@UntilDestroy(this)
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @Input()
  public set date(value: Date | string) {
    if (value instanceof Date) {
      this._date$.next(value);
      this._dateForInput$.next(value);
      this._onChange(value);
    } else {
      const date = new Date(value);

      if (Number.isNaN(Number(date))) {
        const now = new Date();
        this._date$.next(now);
        this._dateForInput$.next(now);
        this._onChange(now);
      } else {
        this._date$.next(date);
        this._dateForInput$.next(date);
        this._onChange(date);
      }
    }
  }

  @Input()
  public format = 'MM/dd/YYYY';

  @Input()
  public set mode(value: Mode) {
    this._mode$.next(value);
  }

  @Input()
  public set minYear(value: number) {
    this._minYear$.next(value);
  }

  @Input()
  public set maxYear(value: number) {
    this._maxYear$.next(value);
  }

  private _date$ = new BehaviorSubject<Date>(new Date());
  private _active$ = new BehaviorSubject<boolean>(false);
  private _days$ = new BehaviorSubject<number[]>([]);
  private _dummyDays$ = new BehaviorSubject<number[]>([]);
  private _dayOfWeek$ = new BehaviorSubject<number>(-1);
  private _day$ = new BehaviorSubject<number>(-1);
  private _minDayOfWeek$ = new BehaviorSubject<number>(-1);
  private _mode$ = new BehaviorSubject<Mode>('month');
  private _minYear$ = new BehaviorSubject<number>(-1);
  private _maxYear$ = new BehaviorSubject<number>(-1);
  private _years$ = new BehaviorSubject<number[]>([]);
  private _skip$ = new BehaviorSubject<number>(0);
  private _daysOfWeek$ = new BehaviorSubject<number[]>([0, 1, 2, 3, 4, 5, 6]);
  private _dateForInput$ = new BehaviorSubject<Date | null>(null);

  private readonly _length = 35;

  private _onChange: (value: any) => void = () => {};

  public get date$(): Observable<Date> {
    return this._date$.asObservable();
  }

  public get active$(): Observable<boolean> {
    return this._active$.asObservable();
  }

  public get days$(): Observable<number[]> {
    return this._days$.asObservable();
  }

  public get dummyDays$(): Observable<number[]> {
    return this._dummyDays$.asObservable();
  }

  public get dayOfWeek$(): Observable<number> {
    return this._dayOfWeek$.asObservable();
  }

  public get daysOfWeek$(): Observable<number[]> {
    return this._daysOfWeek$.asObservable();
  }

  public get minDayOfWeek$(): Observable<number> {
    return this._minDayOfWeek$.asObservable();
  }

  public get day$(): Observable<number> {
    return this._day$.asObservable();
  }

  public get mode$(): Observable<Mode> {
    return this._mode$.asObservable();
  }

  public get minYear$(): Observable<number> {
    return this._minYear$.asObservable();
  }

  public get maxYear$(): Observable<number> {
    return this._maxYear$.asObservable();
  }

  public get years$(): Observable<number[]> {
    return this._years$.asObservable();
  }

  public get skip$(): Observable<number> {
    return this._skip$.asObservable();
  }

  public get dateForInput$(): Observable<Date | null> {
    return this._dateForInput$.asObservable();
  }

  public get length(): number {
    return this._length;
  }

  public get value(): Date {
    return this._date$.value;
  }

  ngOnInit(): void {
    this.onDateChanged();
    this.onYearsRangeChanged();
    this.initCalendarProps();
  }

  public writeValue(value: any): void {
    this.date = value;
    this._onChange(value);
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  public setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  public show(): void {
    this._active$.next(true);
  }

  public hide(): void {
    this._active$.next(false);
  }

  public toggleMode(): void {
    if (this._mode$.value === 'month') {
      this._mode$.next('years');

      if (this._minYear$.value === -1) {
        this._minYear$.next(1900);
      }

      if (this._maxYear$.value === -1) {
        this._maxYear$.next(2090);
      }
    } else {
      this._mode$.next('month');
    }
  }

  public setDay(day: number): void {
    const date = this._date$.value;
    date.setDate(day);

    this._dateForInput$.next(new Date(date));
    this._day$.next(day);
    this._onChange(this._date$.value);
  }

  public next(): void {
    if (this._mode$.value === 'years') {
      this._skip$.next(this._skip$.value + this._length);
    } else {
      const newDate = new Date(this._date$.value);
      const date = addMonths(newDate, 1);
      this._date$.next(date);
    }
  }

  public previous(): void {
    if (this._mode$.value === 'years' && this._skip$.value !== 0) {
      this._skip$.next(this._skip$.value - this._length);
    } else {
      const newDate = new Date(this._date$.value);
      const date = subMonths(newDate, 1);
      this._date$.next(date);
    }
  }

  public yearSelected(year: number): void {
    const date = new Date(this._date$.value);
    date.setFullYear(year);

    this._date$.next(date);
    this._dateForInput$.next(date);
    this._mode$.next('month');
  }

  private onDateChanged(): void {
    this._date$
      .pipe(
        tap(() => {
          this.update();
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  private update(): void {
    const date = this._date$.value;
    const weekDay = startOfMonth(date).getDay();
    const day = date.getDate();
    const endDate = endOfMonth(date);

    const maxDayNumber = endDate.getDate();
    const days = new Array<number>(maxDayNumber).fill(1);
    const dummyDays = new Array<number>(weekDay).fill(1);

    this._days$.next(days);
    this._dummyDays$.next(dummyDays);
    this._dayOfWeek$.next(weekDay);
    this._day$.next(day);
    this._onChange(new Date(date));
  }

  private initCalendarProps(): void {
    const date = new Date(this._date$.value);
    date.setDate(1);

    const day = date.getDay();

    this._minDayOfWeek$.next(day);
  }

  private onYearsRangeChanged(): void {
    zip([this.minYear$, this.maxYear$])
      .pipe(
        switchMap(([min, max]) => {
          return range(min, max - min).pipe(toArray());
        }),
        tap((years) => {
          this._years$.next(years);
          this._skip$.next(0);
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }
}
