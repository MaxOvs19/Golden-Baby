import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IFeedback } from '../../interfaces/feedback.interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  public feedbackForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
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
  }
}
