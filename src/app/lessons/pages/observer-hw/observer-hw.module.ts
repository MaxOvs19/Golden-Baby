import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObserverHWRoutingModule } from './observer-hw-routing.module';
import { ObserverHWComponent } from './observer-hw.component';

@NgModule({
  declarations: [ObserverHWComponent],
  imports: [CommonModule, ObserverHWRoutingModule],
})
export class ObserverHWModule {}
