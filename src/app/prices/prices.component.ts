import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { FeedbackComponent } from '@ui/feedback';

import { IContribution } from './interfaces/contribution.prices.interface';
import { IPrice } from './interfaces/prices.interface';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  public prices: IPrice[] = [
    {
      title: 'Полный день в саду',
      age: {
        from: 1.5,
        to: 5.5,
      },
      items: [
        '5-ти разовое питание ',
        'Игровая деятельность',
        'Прогулки',
        'Дневной сон ',
        'Групповые игры на английском языке',
        'Групповые логопедические игры',
      ],
      time: {
        from: '8-00',
        to: '19-00',
      },

      price: 25000,
    },
    {
      title: 'Короткий день в саду',
      age: {
        from: 1.5,
        to: 5.5,
      },
      items: [
        '2-х разовое питание',
        'Игровая деятельность',
        'Прогулки',
        'Дневной сон ',
        'Групповые игры на английском языке',
        'Групповые логопедические игры',
      ],
      time: {
        from: '8-00',
        to: '12-30',
      },
      price: 15000,
    },
  ];

  public fee: IContribution[] = [
    {
      title: 'Вступительный взнос',
      description: 'Взнос является единоразовым при поступлении',
      price: 15000,
    },
    {
      title: 'Ежегодный взнос',
      description: 'Вносится со второго года пребывания',
      price: 5000,
    },
  ];

  constructor(private readonly _router: Router, private readonly _dialog: MatDialog) {}

  public goShcedule() {
    this._router.navigate(['/schedule']);
  }

  public openForm(): void {
    this._dialog.open(FeedbackComponent);
  }
}
