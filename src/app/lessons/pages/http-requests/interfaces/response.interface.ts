export interface IResponse<T> {
  page: number;
  total: number;
  per_page: number;
  total_pages: number;
  data: T;
}
