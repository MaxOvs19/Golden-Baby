import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pluck, tap } from 'rxjs';

export interface IUser {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IResponse {
  page: number;
  total: number;
  per_page: number;
  total_pages: number;
  // data: any[];
  data: IUser[];
}

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent implements OnInit {
  // DI: Dependency Injection
  constructor(private readonly _http: HttpClient) {}

  /*
    value:
    {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
       ....
    ],
}

  */

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit(): void {
    // this._http
    //   .get<IResponse>('https://reqres.in/api/users')
    //   .pipe(
    //     tap((response) => {
    //       console.log('response: ', response);
    //     }),
    //   )
    //   .subscribe();
    // Ways extract fields from response
    // 1 way (Object destruction)
    // this._http
    //   .get<IResponse>('https://reqres.in/api/users')
    //   .pipe(
    //     tap((response) => {
    //       const { data, page } = response;
    //       console.log('response.page: ', page);
    //       console.log('response.data: ', data);
    //     }),
    //   )
    //   .subscribe();
    // 2 way (Object destruction)
    // this._http
    //   .get<IResponse>('https://reqres.in/api/users')
    //   .pipe(
    //     tap(({ data, page }) => {
    //       console.log('response.page: ', page);
    //       console.log('response.data: ', data);
    //     }),
    //   )
    //   .subscribe();
    // 3 way operator map
    // this._http
    //   .get<IResponse>('https://reqres.in/api/users')
    //   .pipe(
    //     map((response) => {
    //       return {
    //         data: response.data,
    //         page: response.page,
    //       };
    //     }),
    //     tap((response) => {
    //       console.log('response.page: ', response.page);
    //       console.log('response.data: ', response.data);
    //     }),
    //   )
    //   .subscribe();

    // Extraction single field

    this._http
      .get<IResponse>('https://reqres.in/api/users')
      .pipe(
        pluck('data'),
        tap((data) => {
          console.log('data: ', data);
          data.forEach((user) => {
            console.log(user.email);
          });
        }),
      )
      .subscribe();
  }
}
