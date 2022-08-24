import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, pluck, tap } from 'rxjs';

import { UsersService } from '../../services/users.service';
import { IUser } from './../../interfaces/user.interface';

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
    private readonly _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    // const id = this._activatedRoute.snapshot.params['id'];

    const id = this._route.params
      .pipe(
        switchMap((param) => {
          return this._usersService.get(param['id']);
        }),
        pluck('data'),
        tap((user) => {
          this.user = user;
        }),
      )
      .subscribe();

    // 1. Добавить второй способ получение параметра id
    // 2. Добавить resolver для получения пользователя

    // this._usersService
    //   .get(id)
    //   .pipe(
    //     pluck('data'),
    //     tap((user) => {
    //       this.user = user;
    //     }),
    //   )
    //   .subscribe();
  }
}
