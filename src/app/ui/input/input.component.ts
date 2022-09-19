/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, forwardRef } from '@angular/core';
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
  public set value(value: any) {
    this._value = value;
    this._onChange(this._value);
    this._onTouched(this._value);
  }

  public get value() {
    return this._value;
  }

  @Input()
  public set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  public get disabled() {
    return this._disabled;
  }

  @Input()
  public placeholder = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: any) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onValidationChange: () => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onTouched: (value: any) => void = () => {};
  private _value: any;
  private _disabled = false;

  public registerOnValidatorChange?(fn: () => void): void {
    this._onValidationChange = fn;
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  public setplaceholder(_placeholder: string): void {
    this.placeholder = _placeholder;
  }
}
