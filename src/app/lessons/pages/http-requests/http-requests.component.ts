import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pluck, tap } from 'rxjs';

import { IResponse } from './interfaces/response.interface';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent implements OnInit {
  public users: IUser[] = [];

  constructor(private readonly _http: HttpClient) {}

  public ngOnInit(): void {}

  public getUsers(): void {
    this._http
      .get<IResponse>('https://reqres.in/api/users')
      .pipe(
        pluck('data'),
        tap((users) => {
          this.users = users;
        }),
      )
      .subscribe();
  }
}
