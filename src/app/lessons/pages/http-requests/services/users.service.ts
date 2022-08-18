import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly _http: HttpClient) {}

  // public list(): Observable<IResponse> {
  //   return this._http.get<IResponse>('https://reqres.in/api/users');
  // }

  // public list1(): Observable<IResponse> {
  //   return this._http.get<IResponse>('assets/data/users.json');
  // }

  //Ex 2
  public list1(): Observable<IResponse> {
    return this._http.get<IResponse>('https://reqres.in/api/users');
  }

  public list2(): Observable<IResponse> {
    return this._http.get<IResponse>('https://reqres.in/api/users?page=2');
  }
}
