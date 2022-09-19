import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { LinkReturnModule } from '@ui/link-return';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule, LinkReturnModule, MatTabsModule],
})
export class MenuModule {}
