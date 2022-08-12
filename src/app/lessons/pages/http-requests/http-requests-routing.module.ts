import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpRequestsComponent } from './http-requests.component';

const routes: Routes = [
  {
    path: '',
    component: HttpRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRequestsRoutingModule {}
