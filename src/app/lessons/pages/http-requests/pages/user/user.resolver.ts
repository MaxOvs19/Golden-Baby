import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UsersService } from '../../services/users.service';
import { IResponse } from './../../interfaces/response.interface';
import { IUser } from './../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<IResponse<IUser>> {
  constructor(private service: UsersService) {}
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IResponse<IUser>> | Promise<IResponse<IUser>> | IResponse<IUser> {
    return this.service.get(route.params['id']);
  }
}
