import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  from,
  interval,
  map,
  of,
  skip,
  Subscription,
  take,
  takeWhile,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private _subscription!: Subscription;

  public ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.example3();
    this.example4();

    // const user = {
    //   login: 'dwqqdw',
    //   password: '123124124',
    //   image: '',
    //   age: 2314,
    //   head: {
    //     login: 'dwqqdw',
    //     password: '123124124',
    //     image: '',
    //     age: 2314,
    //   },
    // };
    // const exp = user.login + user.password + 234124 + user.head.password;
    // Object desctuction
    // const { login, head } = user;
    // Array destruction
    // const values = [1, 2, 3, 4, 43, 45, 435, 45, 453, 435, 435, 435, 435, 435];
    // // const summ = values[0] + values[1];
    // const [a, b] = values;
    // const summ = a + b;
    // console.log('a', a);
    // console.log('b', b);
    // console.log('summ', summ);
  }

  public ngOnDestroy(): void {
    console.log('ObservablesComponent.ngOnDestroy!');
    this._subscription?.unsubscribe(); // Very important!!!!!
  }

  // public test({ login, password }): void {
  //   console.log('login', login);
  //   console.log('password', password);
  // }

  public example1(): void {
    // const values = [1, 2, 3, 4];
    // const stream$ = from([1, 2, 3, 4]);

    // 1 2 3 4
    // stream$.subscribe((value) => {
    //   console.log('Observable 1:', value);
    // });

    // stream$.subscribe((value) => {
    //   console.log('Observable 2:', value);
    // });

    // stream$.subscribe((value) => {
    //   console.log('Observable 3:', value);
    // });

    // Пример без операторов

    // // вывести квадраты чисел
    // // 1 2 3 4 => 1 4 9 16
    // stream$.subscribe((value) => {
    //   console.log('square:', value * value);
    // });

    // вывести квадраты четных чисел
    // 1 2 3 4 => 4 16
    // stream$.subscribe((value) => {
    //   if (value % 2 === 0) {
    //     console.log('square:', value * value);
    //   }
    // });

    // const stream$ = from([1, 2, 3, 4]);
    // Операторы в RxJS
    // Вывести квадраты чисел
    // stream$
    //   .pipe(
    //     // Put here RxJS operators
    //     map((v) => v * v), // 1 .... 2  .... 3 ..... 4 => 1 .... 4 .... 9 ..... 16
    //   )
    //   .subscribe((v) => {
    //     // Subscriber
    //     console.log('square:', v);
    //   });

    // вывести только четные числа
    // 1 2 3 4 => 2 4

    // stream$.pipe(filter((v) => v % 2 === 0)).subscribe((v) => {
    //   console.log('result: ', v);
    // });

    const stream$ = from([1, 2, 3, 4]);
    // вывести квадраты четных чисел
    // 1 2 3 4 => 4 16
    // stream$
    //   .pipe(
    //     filter((v) => v % 2 === 0),
    //     map((v) => v * v),
    //   )
    //   .subscribe((v) => {
    //     console.log('result: ', v);
    //   });

    // stream$
    //   .pipe(
    //     tap((v) => {
    //       console.log('v in operator "tap 1": ', v);
    //     }),
    //     filter((v) => v % 2 === 0),
    //     map((v) => v * v),
    //     // interceptor (middleware) - промежуточный обработчик. функции, которые отработают раньше,
    //     // чем конечная функция (tap)
    //     tap((v) => {
    //       console.log('v in operator "tap 2": ', v);
    //     }),
    //   )
    //   .subscribe((v) => {
    //     console.log('result: ', v);
    //   });

    // stream$
    //   .pipe(
    //     filter((v) => v % 2 === 0),
    //     map((v) => v * v),
    //     tap((v) => {
    //       // tap === "subscriber"
    //       console.log('result: ', v);
    //     }),
    //   )
    //   .subscribe(); // запуск потока
  }

  public example2(): void {
    // const a = 1;
    // const b = 2;
    // from(1); Error! Only arrays
    // const stream$ = of(1, 2, 3, 4);
    // const stream$ = of(a, b);

    const stream$ = of([1, 2, 3, 4]);
    // const stream$ = of(1);

    stream$
      // .pipe(
      // map((v) => v * v) Error ! array * array ?!??!?!?!?!
      // )
      .subscribe((v) => {
        // console.log('v: ', v);
        // Bad practice
        // v.filter((v) => v % 2 === 0)
        //   .map((v) => v * v)
        //   .forEach((v) => {
        //     console.log('v: ', v);
        //   });
      });
  }

  public example3(): void {
    // Unsubscribe and OnDestroy
    // from, of - creates Observables
    // interval(1000).subscribe((tick) => {
    //   console.log('tick: ', tick);
    // });
    // timer(3000).subscribe((v) => {
    //   console.log('v: ', v);
    // });
    // !!!!! UNSUBSCRIBE !!!!!
    // const subscription = interval(1000).subscribe((tick) => {
    //   console.log('tick: ', tick);
    // });
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 4000);
    // this._subscription = interval(1000).subscribe((tick) => {
    //   console.log('tick: ', tick);
    // });
  }

  public example4(): void {
    // Another operators
    // https://rxjs.dev/guide/overview
    // const stream$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // взять/пропустить только первые 5 чисел

    // stream$
    //   .pipe(
    //     // take(5),
    //     skip(5),
    //     tap((v) => {
    //       console.log('v: ', v);
    //     }),
    //   )
    //   .subscribe();

    // Брать значения, пока в потоке есть положительные числа
    // Как только в потоке появилось отрицательное число - прервать выполнение
    const stream$ = from([1, 2, 3, 4, 5, 6, 7, -8, -9, 10, 25, 99, -9]);
    //                                          ^

    stream$
      .pipe(
        takeWhile((v) => v >= 0),
        // filter((v) => v >= 0), Incorrect!!!
        tap((v) => {
          console.log('v: ', v);
        }),
      )
      .subscribe();
  }
}
