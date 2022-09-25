export interface IRange<T> {
  from: T;
  to: T;
}

export interface IPrice {
  title: string;
  age: IRange<number>;
  time: IRange<string>;
  items: string[];
  price: number;
}
