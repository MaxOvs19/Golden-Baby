import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'observables',
    loadChildren: () =>
      import('./pages/observables/observables.module').then(
        ({ ObservablesModule }) => ObservablesModule,
      ),
  },
  {
    path: 'observer',
    loadChildren: () =>
      import('./pages/observer-hw/observer-hw.module').then(
        ({ ObserverHWModule }) => ObserverHWModule,
      ),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'observables',
  },
  {
    path: '**',
    redirectTo: 'observables',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
