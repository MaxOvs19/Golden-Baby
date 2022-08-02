import { Component, OnInit } from '@angular/core';
import { from, take, tap } from 'rxjs';

@Component({
  selector: 'app-oserver-hw',
  templateUrl: './observer-hw.component.html',
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
    this.exemple7();
  }
  /*
        const stream$ = from(['this', ',' , 1 , 'is', 'a', 55 , 'simple', 'string', '!']);

        С помощью операторов RxJS решить поставленные задачи. Для каждой задачи сделать отдельный метод
        со своим потоком. Если поток выше не подходит - подобрать свой для проверки
        Во входном потоке:

        6. Выбрать только слова (*)
        8. Прервать поток при нахождении первого выражения полиндрома "АННА, 6556" (*)
    */

  //1. Сделать первые буквы слов заглавными (capitalize)
  public exemple1(): void {
    const arr = ['this', 'string', 'love', 'angular'];

    console.log(arr);

    const newArr = arr.map((value) => {
      return value[0].toUpperCase() + value.slice(1);
    });
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
    const arr = ['this', 'string', 'love', 'angular'];

    const newArr = arr.map((word) => {
      return word.replace(/[aeiouy]/g, '$');
    });

    console.log(newArr);
  }

  //4. Перед каждой буквой s вставить строку 777
  public exemple4(): void {
    const arr = ['this', 'string', 'set', 'angular'];

    const newArr = arr.map((word) => {
      return word.replace(/[s]/g, '777s');
    });

    console.log(newArr);
  }

  //5. Выбрать только цифры
  public exemple5(): void {
    const arr = ['this', 1, 'string', 2, 'love', 55, 'angular'];

    const newArr = arr.filter(Number);

    console.log(newArr);
  }

  // public exemple6(): void {
  //   const arr = ['see', 'c', 'test', 'a'];

  //   const newArr = arr.filter((word) => {
  //     return word.length > 1;
  //   });
  //   console.log(newArr);
  // }

  /*7. Выбрать только те строки, которые начинаются/заканчиваются на xx*/
  public exemple7(): void {
    const arr = ['this', 'xxstring', 'set', 'angular', 'doorxx'];

    const newArr = arr.filter((word) => {
      return word.match(/[xx]/);
    });

    console.log(newArr);
  }
}
