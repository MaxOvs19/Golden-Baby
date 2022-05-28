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

  // constructor should be used only by DI(Dependency Injection)
  // (Without DI) fb = new FormBuilder() !!!!!!!!!BAD PRACTICE!!!!!!
  // (DI) private readonly formBuilder: FormBuilder !!!!!!!!!BEST PRACTICE!!!!!!

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

    /*

      ....
 
      group.valueChanges = new Observable((observer) => {
        ....
      })

      group.parentName.valueChanges = new Observable((observer) => {
        ....

        observer = ()=> {} , () => {}, () => {},

        observer.next('.....');
      })

    */

    this.onFormValuesChanges();

    // this.feedbackForm.controls['parentName']?.valueChanges
    //   .pipe(
    //     tap((name: string) => {
    //       console.log('name: ', name);
    //     }),
    //   )
    //   .subscribe();

    // this.feedbackForm.controls['parentName2']?.valueChanges
    //   .pipe(
    //     tap((name: string) => {
    //       console.log('name: ', name);
    //     }),
    //   )
    //   .subscribe();

    // this.feedbackForm.valueChanges
    //   .pipe(
    //     tap((values) => {
    //       console.log('values: ', values);
    //     }),
    //   )
    //   .subscribe();
  }

  private onFormValuesChanges(): void {
    this.feedbackForm.valueChanges
      .pipe(
        debounceTime(9000),
        tap(() => {
          console.log('HELLO!');
        }),
        // map((values: IFeedback) => {
        //   return values.phone;
        // } ),
        // tap((phone) => {

        // }),
        // tap(({ phone, email, parentName }) => {
        //   // console.log('values: ', values);
        //   console.log('phone: ', phone);
        //   console.log('email: ', email);
        //   console.log('parentName: ', parentName);
        // }),

        takeUntil(this._alive$),
        // untilDestroy(this)
      )
      .subscribe();
  }
}
