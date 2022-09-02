import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';
import { ButtonModule } from '../ui/button';
import { LinkReturnModule } from '../ui/link-return';
import { MatDialogModule } from '@angular/material/dialog';
import { FeedbackModule } from '@ui/feedback';

@NgModule({
  declarations: [PricesComponent],
  imports: [
    CommonModule,
    PricesRoutingModule,
    ButtonModule,
    LinkReturnModule,
    MatDialogModule,
    FeedbackModule,
  ],
})
export class PricesModule {}
