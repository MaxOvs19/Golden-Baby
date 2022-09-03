import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '@ui/button';
import { LinkReturnModule } from '@ui/link-return';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';

@NgModule({
  declarations: [PricesComponent],
  imports: [CommonModule, PricesRoutingModule, ButtonModule, LinkReturnModule],
})
export class PricesModule {}
