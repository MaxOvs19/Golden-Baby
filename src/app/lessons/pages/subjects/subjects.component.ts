import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  /*
    RxJS
    Subjects (4):
    - Subject<T>
    - BehaviorSubject<T>
    - ReplySubject<T>
    - AsyncSubject<T>
  */

  private readonly _subject1$ = new Subject<number>();
  private readonly _subject2$ = new BehaviorSubject<number>(1); // buffer[1] {1} => {22} => {{33}} ....
  private readonly _subject3$ = new ReplaySubject<number>(4); // buffer[4] {1,2} => {1,2,3,4} => {2,3,4,5}
  private readonly _subject4$ = new AsyncSubject<number>();

  private _observable1$ = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
  });

  // Angular. transfer Observables to view (html)

  public value$ = new Observable<number>((observer) => {
    // of(12)
    observer.next(12);

    setTimeout(() => {
      observer.next(20000);
    }, 1200);
  });

  private readonly _values$ = new BehaviorSubject<number>(0);
  // private readonly _values$ = new Subject<number>(); Doesn't work

  public get values$(): Observable<number> {
    return this._values$.asObservable();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit(): void {
    // this.subject1();
    // this.subject2();
    // this.subject3();
    // this.subject4();
    // this._observable1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._observable1$.next(); // ERROR!!!
    // this.value$.next();
  }

  public subject1(): void {
    // this._subject1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 1, v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._subject1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 2, v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._subject1$.next(1);
    // this._subject1$.next(1);
    // this._subject1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 1, v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._subject1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 2, v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._subject1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 2, v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._subject1$.next(1);
    // this._subject1$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 1, v: ', v);
    //     }),
    //   )
    //   .subscribe();
    // this._subject1$.next(10);
  }

  public subject2(): void {
    const subscription1 = this._subject2$
      .pipe(
        tap((v) => {
          console.log('subscriber 1, v: ', v);
        }),
      )
      .subscribe();

    this._subject2$
      .pipe(
        tap((v) => {
          console.log('subscriber 2, v: ', v);
        }),
      )
      .subscribe();

    setTimeout(() => {
      this._subject2$
        .pipe(
          tap((v) => {
            console.log('subscriber 3, v: ', v);
          }),
        )
        .subscribe();

      subscription1.unsubscribe();

      this._subject2$.next(2000);
    }, 3000);

    this._subject2$.next(88);

    // s1, v: 1
    // s2, v: 1
    // s1, v: 88
    // s2, v: 88
    // s3, v: 88
    // s2, v: 2000
    // s3, v: 2000
  }

  public subject3(): void {
    // this._subject3$
    //   .pipe(
    //     tap((v) => {
    //       console.log('subscriber 1, v: ', v);
    //     }),
    //   )
    //   .subscribe();

    // this._subject3$.next(12);
    // this._subject3$.next(22);

    this._subject3$.next(12);
    this._subject3$.next(22);

    this._subject3$
      .pipe(
        tap((v) => {
          console.log('subscriber 1, v: ', v);
        }),
      )
      .subscribe();

    this._subject3$
      .pipe(
        tap((v) => {
          console.log('subscriber 2, v: ', v);
        }),
      )
      .subscribe();

    this._subject3$.next(55);
    this._subject3$.next(66);
    this._subject3$.next(0);

    this._subject3$
      .pipe(
        tap((v) => {
          console.log('subscriber 3, v: ', v);
        }),
      )
      .subscribe();
  }

  public subject4(): void {
    this._subject4$.next(11);
    this._subject4$.next(20);

    this._subject4$
      .pipe(
        tap((v) => {
          console.log('s1, v: ', v);
        }),
      )
      .subscribe();

    this._subject4$
      .pipe(
        tap((v) => {
          console.log('s2, v: ', v);
        }),
      )
      .subscribe();

    setTimeout(() => {
      this._subject4$.next(77);
      this._subject4$.complete();
    }, 5000);
  }

  public update(): void {
    const rand = Math.random() * 10;
    this._values$.next(rand);
  }
}
