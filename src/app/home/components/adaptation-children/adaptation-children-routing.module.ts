import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdaptationChildrenComponent } from './adaptation-children.component';

const routes: Routes = [
  {
    path: '',
    component: AdaptationChildrenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
