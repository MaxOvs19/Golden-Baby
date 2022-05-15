import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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

  @ViewChild('parentsName')
  first!: ElementRef;
  ngAfterViewInit() {
    console.log(this.first);
  }

  ngOnInit(): void {
    //console.log(this.feedback.parentName);
  }

  onsubmid() {
    if (this.feedback.parentName != '') {
      console.log(this.feedback.parentName);
    } else console.log('Error: parentName');
  }
}
