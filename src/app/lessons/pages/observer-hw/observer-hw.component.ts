import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oserver-hw',
  templateUrl: './observer-hw.component.html',
  // template: ` <h2>HELLO!</h2> `,
  // template: '<h2>HELLO!</h2>' + '<div style='' >841908129801294</div>',
  styleUrls: ['./observer-hw.component.scss'],
})
export class ObserverHWComponent implements OnInit {
  public ngOnInit(): void {
    // this.exemple1();
    // this.exemple2();
    // this.exemple3();
    // this.exemple4();
    // this.exemple5();
    // this.exemple6();
    // this.exemple7();
    this.example8();
  }
  /*
        const stream$ = from(['this', ',' , 1 , 'is', 'a', 55 , 'simple', 'string', '!']);

        С помощью операторов RxJS решить поставленные задачи. Для каждой задачи сделать отдельный метод
        со своим потоком. Если поток выше не подходит - подобрать свой для проверки
        Во входном потоке:


        8. Прервать поток при нахождении первого выражения полиндрома "АННА, 6556" (*)
    */

  //1. Сделать первые буквы слов заглавными (capitalize)
  public exemple1(): void {
    const arr = ['this', 'string', 'love', 'angular'];

    console.log('Before: ', arr);

    const newArr = arr.map((value) => {
      const capitalizedString = `${value[0].toUpperCase()} ${value.slice(1)}`;
      // console.log('capitalizedString: ', capitalizedString);

      return capitalizedString;
    });

    console.log('After: ', newArr);
  }

  //2. Сделать первые буквы слов длинее 1го символа заглавными (capitalize)
  public exemple2(): void {
    const arr = ['t', 'string', 'angular'];

    const newArr = arr
      .filter((word) => {
        return word.length > 1;
      })
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      });

    console.log(newArr);
  }

  //3. Заменить все гласные буквы на $
  public exemple3(): void {
    const arr = ['thIs', 'string', 'lovE', 'angular'];

    const newArr = arr.map((word) => {
      return word.replace(/[aeiouy]/gi, '$');
    });

    console.log(newArr);
  }

  //4. Перед каждой буквой s вставить строку 777
  public exemple4(): void {
    const arr = ['sthis', 'string', 'set', 'angular'];

    console.log(arr);

    const newArr = arr.map((word) => {
      return word.replace(/s/g, '777s');
    });

    console.log(newArr);
  }

  //5. Выбрать только цифры
  public exemple5(): void {
    const arr = ['this', 1, 'string', 2, 'love', 55, 'angular', '1'];

    console.log(arr);

    const newArr = arr
      .filter((item) => {
        return item.toString().match(/[0-9]/g);
      })
      .map((item) => {
        // return +item;
        return Number(item); // best way
        // return parseInt(item.toString(), 10);
      });

    console.log(newArr);
  }

  // 6. Выбрать только слова (*)
  public exemple6(): void {
    const arr = [1, 2, 3, 'hello', 'a', '!'];

    // const newArr = arr
    //   .map((word) => {
    //     return word.toString();
    //   })
    //   .filter((word) => {
    //     return word.replace(/\d/g, '');
    //   });

    const newArr = arr.filter((value) => typeof value === 'string');

    console.log(newArr);
  }

  /*7. Выбрать только те строки, которые начинаются/заканчиваются на xx*/
  public exemple7(): void {
    const arr = ['xxthis', 'xstring', 'setx', 'angxxular', 'doorxx'];

    console.log(arr);

    const newArr = arr.filter((word) => {
      // return word.match(/[xx]/); Incorrect !
      // return word.match(/^xx/); // startWith
      // return word.match(/xx$/); // endWith
      // return word.startsWith('xx');
      // return word.endsWith('xx');
      // return word.startsWith('xx') || word.endsWith('xx');
      return word.match(/(^xx)|(xx$)/);
    });

    console.log(newArr);
  }

  public example8(): void {
    const arr = [1, 2, 5, 8];
    // const arr: any[] = [
    //   {
    //     value: 6,
    //   },
    //   1,
    //   2,
    // ];
    // let summ = 0;

    // arr.forEach((item) => {
    //   summ += item;
    // });
    // console.log('summ: ', summ);

    // const summ = arr.reduce((acc, current) => {
    //   return acc + current;
    // });

    // const summ = arr.reduce((acc, current) => {
    //   // debugger;
    //   return current.value ? current.value + acc : acc + current;
    // }, 0);

    const evensCount = arr.reduce((acc, current) => {
      return current % 2 === 0 ? acc + 1 : acc;
    }, 0);

    // console.log('summ: ', summ);
    console.log('evens count: ', evensCount);
  }
}
