import { ButtonComponent } from './../../../ui/button/button.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { FeedbackDialogComponent } from 'src/app/ui/dialogs/feedback-dialog/feedback-dialog.component';

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
  }

  public control(name: string): AbstractControl | null {
    return this.feedbackForm?.get(name) || null;
  }

  public invalid(name: string): boolean {
    return !!(this.feedbackForm?.get(name)?.invalid && this.feedbackForm?.get(name)?.dirty);
  }

  public submit(): void {
    const feedback: IFeedback = this.feedbackForm.getRawValue();

    // if (this.feedbackForm.invalid === false) {
    this._feedbackService
      .send(feedback)
      .pipe(
        tap(() => {
          this.feedbackForm.reset();
          this._dialog.open(FeedbackDialogComponent);
        }),
      )
      .subscribe();

    console.log(feedback);
    // }
  }

  private createForm(): void {
    this.feedbackForm = this._formBuilder.group({
      parentName: ['', [Validators.required, Validators.pattern(/^[а-я\s]+$/i)]],
      childName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/), Validators.required]],
      comment: [''],
      checkbox: [false, [Validators.requiredTrue]],
    });
  }
}
