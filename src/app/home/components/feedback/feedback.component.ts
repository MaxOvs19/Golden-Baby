import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { debounceTime, map, Subject, takeUntil, tap } from 'rxjs';
import { IFeedback } from '../../interfaces/feedback.interface';

// @ng-neat/until-destroy => npm package

// @UntilDestroy()
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit, OnDestroy {
  private _alive$ = new Subject<void>();

  public feedbackForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this._alive$.next();
    this._alive$.complete();
  }

  public control(name: string): AbstractControl | null {
    return this.feedbackForm?.get(name) || null;
  }

  public submit(): void {
    const feedback: IFeedback = this.feedbackForm.getRawValue();

    console.log(feedback);
  }

  private createForm(): void {
    this.feedbackForm = this.formBuilder.group({
      parentName: ['', [Validators.required]],
      childName: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/), Validators.required]],
      comment: [''],
      checkbox: [false, [Validators.requiredTrue]],
    });

    this.onFormValuesChanges();
  }

  private onFormValuesChanges(): void {
    this.feedbackForm.valueChanges
      .pipe(
        debounceTime(9000),
        tap(() => {
          console.log('HELLO!');
        }),
        takeUntil(this._alive$),
      )
      .subscribe();
  }
}
