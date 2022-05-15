import { formatDate, registerLocaleData } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

import ru from '@angular/common/locales/ru';

registerLocaleData(ru, 'ru');

import { IFeedback } from '../../interfaces/feedback.interface';

@Component({
  selector: 'app-bid-form-introduction',
  templateUrl: './bid-form-introduction.component.html',
  styleUrls: ['./bid-form-introduction.component.scss'],
})
export class BidFormIntroductionComponent {
  @ViewChild('parentsName')
  public first!: ElementRef;

  static amount = 0;

  public formValid = false;

  public feedback: IFeedback = {
    parentName: '',
    phone: '',
    childName: '',
    birthday: formatDate(new Date(), 'yyyy-MM-dd', 'ru'),
    agreement: false,
  };

  submit(): void {
    if (this.feedback.parentName != '') {
      console.log(this.feedback.parentName);
    } else {
      console.log('Error: parentName');
    }
  }

  checkName(name: string): boolean {
    BidFormIntroductionComponent.amount++;

    console.log('amount: ', BidFormIntroductionComponent.amount);

    return name.length > 0;
  }

  validate(): void {
    const phoneRegExp = /^\+7\d{10}$/;

    this.formValid =
      !!this.feedback.phone.match(phoneRegExp) &&
      this.feedback.agreement &&
      !!this.feedback.birthday &&
      !!this.feedback.childName &&
      !!this.feedback.parentName;

    console.log(this.feedback);
  }
}
