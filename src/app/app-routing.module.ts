import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { GroupsViewComponent } from './groups-view/groups-view.component';
import { DailyRoutinePageComponent } from './daily-routine-page/daily-routine-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'contacts',
    component: GroupsViewComponent,
  },
  {
    path: 'routine',
    component: DailyRoutinePageComponent,
  },
  {
    path: 'price',
    component: PricePageComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
