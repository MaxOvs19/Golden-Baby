import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  constructor() {}

  private _onChange(value: any) {}

  private _value: any;

  get value() {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = val;
    this._onChange(this._value);
  }

  @Input()
  placeholder!: string;

  @Input()
  type!: string;

  @Input()
  formControlName!: string;

  writeValue(value: any): void {
    this.placeholder = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
}
