import { Component } from '@angular/core';
import { pluck, tap } from 'rxjs';

import { IUser } from './interfaces/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent {
  public users: IUser[] = [];

  constructor(private readonly _usersService: UsersService) {}

  public getUsers(): void {
    this._usersService
      .list()
      .pipe(
        pluck('data'),
        tap((users) => {
          this.users = users;
        }),
      )
      .subscribe();
  }
}
