import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  // selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // template: ` <h1>HELLO!</h1> `,
})
export class PricesComponent implements OnInit {
  constructor(private router: Router) {}

  public goShcedule(): void {
    this.router.navigate(['/schedule']);
  }

  public ngOnInit(): void {
    // PROMISES
    // const p = new Promise((res, rej) => {
    //   console.log('HELLO 1!');
    //   // res(1);
    //   // res('HELLO FROM RES');
    //   // res(1); // state => resolved (will be executed all then callbacks)
    //   // rej(1); // state => rejected (no then callbacks)
    //   // rej(1);
    // });
    // // onResolved Promise
    // p.then((value) => {
    //   console.log('THEN 1!', value);
    // });
    // p.then((value) => {
    //   console.log('THEN 2!', value);
    // });
    // // onRejected Promise
    // p.catch((value) => {
    //   console.log('REJECTED: ', value);
    // });
    // // onChangedPromiseState
    // p.finally(() => {
    //   console.log('finally !');
    // });
    // setTimeout(() => {
    //   console.log('HELLO!');
    // }, 30000);
    // TASK: call functions: foo, bar, zoo only after Promise inside hardOperation function will be resolved
    // this.hardOperation()
    //   .then((result) => {
    //     this.foo();
    //     this.bar();
    //     this.zoo();
    //     console.log('RESULT 1: ', result);
    //   })
    //   .then((result) => {
    //     console.log('RESULT 2: ', result); // undefined
    //   })
    //   .then((result) => {
    //     console.log('RESULT 3: ', result); // undefined
    //   })
    //   .then((result) => {
    //     console.log('RESULT 4: ', result); // undefined
    //   })
    //   .then((result) => {
    //     console.log('RESULT 5: ', result); // undefined
    //   });
    // OBSERVERS

    const p = new Promise((res, rej) => {
      console.log('PROMISE');
      res(1 + 2);
      rej(10);
    });

    p.then((r) => {
      console.log('PROMISE.Result: ', r);
    });

    const obs = new Observable((subscriber) => {
      console.log('OBSERVABLE');
      subscriber.next(1 + 2);
      // 3 sec later
      setTimeout(() => {
        subscriber.next(10);
      }, 3000);
    });

    const s = obs.subscribe((r) => {
      console.log('OBSERVABLE.Result: ', r);
    });

    obs.subscribe((r) => {
      console.log('OBSERVABLE 2.Result: ', r);
    });

    setTimeout(() => {
      // s.unsubscribe();
    }, 1000);
  }

  // public foo(): void {
  //   console.log('foo');
  // }
  // public bar(): void {
  //   console.log('bar');
  // }
  // public zoo(): void {
  //   console.log('zoo');
  // }

  // public hardOperation(): Promise<number> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       console.log('HELLO!');
  //       res(1);
  //       // rej(1);
  //       // no resolve, no reject, state === pending
  //     }, 3000);
  //   });
  // }
}
