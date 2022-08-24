import { pluck, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { IUser } from './../../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public user!: IUser;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _usersService: UsersService,
  ) {}

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];

    // 1. Добавить второй способ получение параметра id
    // 2. Добавить resolver для получения пользователя

    this._usersService
      .get(id)
      .pipe(
        pluck('data'),
        tap((user) => {
          this.user = user;
        }),
      )
      .subscribe();
  }
}
