import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { distinctUntilChanged, filter, startWith, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FeedbackDialogComponent } from '@ui/dialogs/feedback-dialog';

import { IFeedback } from '../../interfaces/feedback.interface';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  public feedbackForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _feedbackService: FeedbackService,
    private readonly _dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.createForm();

    // HW[RxJS]: switchMap, mergeMap, concatMap, exaustMap. Differences

    // of(1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 4)
    //   .pipe(
    //     // startWith('HR'), Start stream with 'HR' value
    //     distinctUntilChanged(), // prev !== current
    //     // distinctUntilChanged((prev, current) => prev !== current && current % 2 === 0),
    //     tap((v) => {
    //       console.log('v: ', v);
    //     }),
    //   )
    //   .subscribe();
  }

  public control(name: string): AbstractControl | null {
    return this.feedbackForm?.get(name) || null;
  }

  public invalid(name: string): boolean {
    return !!(this.feedbackForm?.get(name)?.invalid && this.feedbackForm?.get(name)?.dirty);
  }

  public submit(): void {
    const feedback: IFeedback = this.feedbackForm.getRawValue();

    this._feedbackService
      .send(feedback)
      .pipe(
        switchMap(() => {
          return this._dialog.open(FeedbackDialogComponent).afterClosed();
        }),
        filter((result) => !!result),
        tap(() => {
          // TODO: Need to find other solution for current route reloading
          window.location.reload();
        }),
      )
      .subscribe();

    console.log(feedback);
  }

  private createForm(): void {
    this.feedbackForm = this._formBuilder.group({
      parentName: ['проклу', [Validators.required, Validators.pattern(/^[а-я\s]+$/i)]],
      childName: ['ауц', [Validators.required]],
      birthday: [new Date(), [Validators.required]],
      phone: [
        '+7 000 000 22 11',
        [Validators.pattern(/^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/), Validators.required],
      ],
      comment: [''],
      checkbox: [false, [Validators.requiredTrue]],
    });
  }
}
