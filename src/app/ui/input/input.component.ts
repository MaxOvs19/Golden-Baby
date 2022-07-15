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
  private _onChange(value: any) {}

  private _value: any;

  public get value() {
    return this._value;
  }

  @Input()
  public set value(val) {
    this._value = val;
    this._onChange(this._value);
  }

  @Input()
  public placeholder!: string;

  @Input()
  public type!: string;

  @Input()
  public formControlName!: string;

  public writeValue(value: any): void {
    this.placeholder = value;
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
}
