import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ButtonModule } from '@ui/button';
import { LinkReturnModule } from '@ui/link-return';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';

@NgModule({
  declarations: [PricesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PricesRoutingModule,
    ButtonModule,
    LinkReturnModule,
    MatDialogModule,
  ],
})
export class PricesModule {}
