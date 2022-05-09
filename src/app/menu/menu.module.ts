import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { LinkReturnModule } from '../ui/link-return';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule, LinkReturnModule],
})
export class MenuModule {}
