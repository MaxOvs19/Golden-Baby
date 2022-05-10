import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { delay, filter, from, map, Observable, of, pluck, skip, take, tap, toArray } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const p = new Promise<number>((resolve, reject) => {
    //   // resolve(500);
    //   setTimeout(() => {
    //     // resolve(500);
    //     // reject(100);
    //   }, 3000);
    // });
    // p.then((value) => {
    //   console.log('value: ', value);
    // }).catch((err) => {
    //   console.log('err: ', err);
    // });
    // navigator.clipboard.writeText('HELLO!');
    // this.send().then((response) => {
    //   const parsedResponse = JSON.parse(response);
    //   console.log('parsedResponse: ', parsedResponse.data);
    // });

    const s$ = from([1, 2, 3, 4, 5, 6]).pipe(
      // take(2),
      skip(2),
      delay(5000),
      filter((value) => value % 2 === 0),
      map((value) => value * 3),
      // toArray(),
    );
    // [] ............... [1] =>
    // s$.subscribe((item) => (item) => {....} ......... [2] => (item) => {....}
    //   console.log('item: ', item);
    // });

    // setTimeout(() => {
    //   s$.subscribe((item) => {
    //     console.log('item: ', item);
    //   });
    // }, 5000);

    // s$.subscribe((item) => {
    //   console.log('item: ', item);
    // });

    this.send2()
      .pipe(
        pluck('response', 'data'), // {}.response.data
        tap((data) => {
          console.log(data);
        }),
      )
      .subscribe();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="left"></i>', '<i class="right"></i>'],
    margin: 30,
    center: true,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  public send(): Promise<any> {
    return new Promise((resolve, reject) => {
      // Web API (Browser API)
      const xhr = new XMLHttpRequest();

      xhr.open('GET', 'https://reqres.in/api/users?delay=5');

      xhr.send();

      xhr.onload = function () {
        console.log(`Загружено: ${xhr.status} ${xhr.response}`);
        resolve(xhr.response);
      };
    });
  }

  public send2(): Observable<AjaxResponse<any>> {
    return ajax({
      url: 'https://reqres.in/api/users?delay=5',
    });
  }
}
