import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

export interface IResponse {
  page: number;
  total: number;
  per_page: number;
  total_pages: number;
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

  public ngOnInit(): void {
    this._http
      .get<IResponse>('https://reqres.in/api/users')
      .pipe(
        tap((response) => {
          console.log('response: ', response);
          console.log('response.page;: ', response.page);
        }),
      )
      .subscribe();
  }
}
