import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserverHWComponent } from './observer-hw.component';

const routes: Routes = [
  {
    path: '',
    component: ObserverHWComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObserverHWRoutingModule {}
