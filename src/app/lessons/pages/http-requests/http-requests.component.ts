import { Component } from '@angular/core';
import { pluck, tap } from 'rxjs';

import { IUser } from './interfaces/user.interface';
import { UsersService } from './services/users.service';

/**
 * HW
 *
 * 1. Получить пользователей из JSON файла, который находится в assets/data/users.json
 *    и вывести результат с пощью mat-card
 *
 * 2. Добавить возможность получать пользователей на определенной странице
 *    Пример: https://reqres.in/api/users?page=2
 *    Реализовать с помощтю поля ввода:
 *        (page: [1]) => https://reqres.in/api/users?page=1
 *        (page: [2]) => https://reqres.in/api/users?page=2
 *
 * 3. Создать страницу для просмотра конкретного пользователя
 *    https://reqres.in/api/users/1 =>
 *
 *    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
      }
 *
 */

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
