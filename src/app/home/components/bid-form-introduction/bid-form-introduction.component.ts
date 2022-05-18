import { Component, OnInit } from '@angular/core';
import { IFeedback } from '../../interfaces/feedback.interface';

@Component({
  selector: 'app-bid-form-introduction',
  templateUrl: './bid-form-introduction.component.html',
  styleUrls: ['./bid-form-introduction.component.scss'],
})
export class BidFormIntroductionComponent implements OnInit {
  feedback: IFeedback = {
    parentName: '',
    phone: '',
    childName: '',
    birthday: new Date(),
    agreement: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
