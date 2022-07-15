/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  public set value(val: any) {
    this._value = val;
    this._onChange(this._value);
  }

  public get value() {
    return this._value;
  }

  @Input()
  public placeholder!: string;

  @Input()
  public type!: string;

  @Input()
  public formControlName!: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: any) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onTouched: (value: any) => void = () => {};
  private _value: any;

  // constructor
  // ngHooks (ngOnInit, ngOnChanges , ...)
  // public fns
  // private fns

  public writeValue(value: any): void {
    this.placeholder = value;
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
