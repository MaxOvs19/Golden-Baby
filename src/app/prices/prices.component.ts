import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { FeedbackComponent } from '@ui/feedback';

import { Icontribution } from './interfaces/contribution.prices.interface';
import { Iprice } from './interfaces/prices.interface';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  constructor(private router: Router, private readonly _dialog: MatDialog) {}
  public price: Iprice[] = [
    {
      title: 'Полный день в саду',
      age: 'от 1,5 до 5,5 лет',
      includedPrice: [
        '5-ти разовое питание ',
        'Игровая деятельность',
        'Прогулки',
        'Дневной сон ',
        'Групповые игры на английском языке',
        'Групповые логопедические игры',
      ],
      time: 'C 8-00 до 19-00',
      price: '25 000 ₽',
    },
    {
      title: 'Короткий день в саду',
      age: 'от 1,5 до 5,5 лет',
      includedPrice: [
        '2-х разовое питание',
        'Игровая деятельность',
        'Прогулки',
        'Дневной сон ',
        'Групповые игры на английском языке',
        'Групповые логопедические игры',
      ],
      time: 'С 8-00 до 12-30',
      price: '15 000 ₽',
    },
  ];

  public fee: Icontribution[] = [
    {
      title: 'Вступительный взнос',
      description: 'Взнос является единоразовым при поступлении',
      price: '15 000 ₽',
    },
    {
      title: 'Ежегодный взнос',
      description: 'Вносится со второго года пребывания',
      price: '5 000 ₽',
    },
  ];

  public goShcedule() {
    this.router.navigate(['/schedule']);
  }

  public openForm(): void {
    this._dialog.open(FeedbackComponent);
  }
}
