import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkReturnModule } from '@ui/link-return';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, LinkReturnModule],
})
export class MapModule {}
