import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { LinkReturnModule } from '../ui/link-return';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule, LinkReturnModule, MatTabsModule],
})
export class MenuModule {}
