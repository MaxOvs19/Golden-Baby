import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';
import { ButtonModule } from '../ui/button';

@NgModule({
  declarations: [PricesComponent],
  imports: [CommonModule, PricesRoutingModule, ButtonModule],
})
export class PricesModule {}
