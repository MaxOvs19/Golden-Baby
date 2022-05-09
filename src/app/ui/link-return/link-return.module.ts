import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkReturnComponent } from './link-return.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LinkReturnComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinkReturnComponent],
})
export class LinkReturnModule {}
