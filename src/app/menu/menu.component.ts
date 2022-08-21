import { Component, OnInit } from '@angular/core';

import { Imenu } from './interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // Mock
  public week: Imenu[] = [
    {
      dayWeek: 'Понедельник',
      breakfast: '1 Каша манная молочная, чай, хлеб пшеничный с малом и сыром',
      snack: 'Фрукты',
      lunch:
        'Свекла отворная, щи на мясном бульоне, ежики (мясо курицы) в томатном соусе, салат из свежых овощей, компот из свежих фруктов, хлеб ржаной',
      afternoonTea: 'Печенье, ряженка',
      dinner: 'Рыбная котлета, гречка, огурец',
    },
    {
      dayWeek: 'Вторник',
      breakfast: '2 Каша манная молочная, чай, хлеб пшеничный с малом и сыром',
      snack: 'Фрукты',
      lunch:
        'Свекла отворная, щи на мясном бульоне, ежики (мясо курицы) в томатном соусе, салат из свежых овощей, компот из свежих фруктов, хлеб ржаной',
      afternoonTea: 'Печенье, ряженка',
      dinner: 'Рыбная котлета, гречка, огурец',
    },
    {
      dayWeek: 'Среда',
      breakfast: 'Каша манная молочная, чай, хлеб пшеничный с малом и сыром',
      snack: 'Фрукты',
      lunch:
        'Свекла отворная, щи на мясном бульоне, ежики (мясо курицы) в томатном соусе, салат из свежых овощей, компот из свежих фруктов, хлеб ржаной',
      afternoonTea: 'Печенье, ряженка',
      dinner: 'Рыбная котлета, гречка, огурец',
    },
    {
      dayWeek: 'Четверг',
      breakfast: 'Каша манная молочная, чай, хлеб пшеничный с малом и сыром',
      snack: 'Фрукты',
      lunch:
        'Свекла отворная, щи на мясном бульоне, ежики (мясо курицы) в томатном соусе, салат из свежых овощей, компот из свежих фруктов, хлеб ржаной',
      afternoonTea: 'Печенье, ряженка',
      dinner: 'Рыбная котлета, гречка, огурец',
    },
    {
      dayWeek: 'Пятница',
      breakfast: 'Каша манная молочная, чай, хлеб пшеничный с малом и сыром',
      snack: 'Фрукты',
      lunch:
        'Свекла отворная, щи на мясном бульоне, ежики (мясо курицы) в томатном соусе, салат из свежых овощей, компот из свежих фруктов, хлеб ржаной',
      afternoonTea: 'Печенье, ряженка',
      dinner: 'Рыбная котлета, гречка, огурец',
    },
  ];

  public ngOnInit(): void {
    console.log(this.week);
    console.log(this.week);
    console.log(this.week);
    console.log(this.week);
  }
}
