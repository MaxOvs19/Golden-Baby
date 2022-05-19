import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-bid-form-introduction',
  templateUrl: './bid-form-introduction.component.html',
  styleUrls: ['./bid-form-introduction.component.scss'],
})
export class BidFormIntroductionComponent implements OnInit {
  constructor() {}

  public parentsName!: FormControl;

  ngOnInit(): void {
    this.parentsName = new FormControl(null, [myValidator]);

    this.parentsName.valueChanges.subscribe((value) => console.log(value));
    this.parentsName.statusChanges.subscribe((status) => console.log(status));
  }
}

function myValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value.length == 0 && control.dirty) {
    return { errorName: true };
  }
  return null;
}
