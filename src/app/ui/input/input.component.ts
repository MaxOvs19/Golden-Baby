/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

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

    {
      provide: NG_VALIDATORS,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, Validator {
  @Input()
  public set value(val: any) {
    this._value = val;
    this._onChange(this._value);
  }

  public get value() {
    return this._value;
  }

  @Input()
  public placeholder = '';

  public get disabled() {
    return this._disabled;
  }

  public get Placeholder() {
    return this.placeholder;
  }

  // validate(control: AbstractControl): { [key: string]: any } | null {
  //   if (control.invalid && control.dirty) {
  //     return { parent: true };
  //   }
  //   return null;
  // }

  public validate(control: AbstractControl): ValidationErrors | null {
    if (control.invalid && control.dirty) {
      return { parent: true };
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: any) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onTouched: (value: any) => void = () => {};
  private _value: any;
  private _disabled = false;
  // private _placeholder = '';

  // constructor
  // ngHooks (ngOnInit, ngOnChanges , ...)
  // public fns
  // private fns

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
