import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((home) => home.HomeModule),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then((schedule) => schedule.ScheduleModule),
  },
  {
    path: 'prices',
    loadChildren: () => import('./prices/prices.module').then((prices) => prices.PricesModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((menu) => menu.MenuModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((map) => map.MapModule),
  },
  // TODO: remove routes and folders before production
  {
    path: 'lessons',
    loadChildren: () =>
      import('./lessons/lessons.module').then(({ LessonsModule }) => LessonsModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
