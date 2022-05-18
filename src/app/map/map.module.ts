import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { LinkReturnModule } from '../ui/link-return';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, LinkReturnModule],
})
export class MapModule {}
