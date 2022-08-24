import { pluck, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { IUser } from './../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public user!: IUser;
  // public idUser!: number;

  constructor(private readonly _http: HttpClient, private readonly _usersService: UsersService) {}

  public ngOnInit(): void {
    // getUser();
    this._usersService.getUser().pipe(pluck('data')).subscribe();
  }
}
