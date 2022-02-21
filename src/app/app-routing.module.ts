import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstMainPageComponent } from './first-main-page/first-main-page.component';
import { GroupsViewComponent } from './groups-view/groups-view.component';

const routes: Routes = [
  {
    path: '',
    component: FirstMainPageComponent,
  },
  {
    path: 'contacts',
    component: GroupsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
