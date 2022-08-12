import { IUser } from './user.interface';

export interface IResponse {
  page: number;
  total: number;
  per_page: number;
  total_pages: number;
  data: IUser[];
}
