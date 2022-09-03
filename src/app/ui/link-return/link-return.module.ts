import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LinkReturnComponent } from './link-return.component';

@NgModule({
  declarations: [LinkReturnComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinkReturnComponent],
})
export class LinkReturnModule {}
