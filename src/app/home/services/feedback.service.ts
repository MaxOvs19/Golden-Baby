import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IFeedback } from '../interfaces/feedback.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private readonly _http: HttpClient) {}

  public send(feedback: IFeedback) {
    const url = 'https://reqres.in/api/users/1'; // To do replace url
    const body = {
      parentName: feedback.parentName,
      childName: feedback.childName,
      birthday: feedback.birthday,
      phone: feedback.phone,
      comment: feedback.comment,
      agreement: feedback.agreement,
    };

    return this._http.post(url, body);
  }
}
