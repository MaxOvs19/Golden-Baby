import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IFeedback } from '../../interfaces/feedback.interface';

//Angular works by pattern MVVM
@Component({
  selector: 'app-bid-form-introduction',
  templateUrl: './bid-form-introduction.component.html', // View
  styleUrls: ['./bid-form-introduction.component.scss'],
})
// Component === ViewModel
export class BidFormIntroductionComponent implements OnInit {
  @ViewChild('parentsName')
  public first!: ElementRef;

  // Model
  public feedback: IFeedback = {
    parentName: 'Lisa',
    phone: '',
    childName: '',
    birthday: new Date(),
    agreement: false,
  };

  public title = 'Hello!';

  constructor() {}

  ngOnInit(): void {
    //console.log(this.feedback.parentName);

    setTimeout(() => {
      this.title = new Date().toString();
      this.feedback.parentName = 'LOL';
    }, 9000);
  }

  submit(): void {
    if (this.feedback.parentName != '') {
      console.log(this.feedback.parentName);
    } else {
      console.log('Error: parentName');
    }
  }

  test(pName: string): void {
    console.log('pName: ', pName);
    console.log('this.feedback: ', this.feedback);
  }
}
