import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HttpRequestsRoutingModule } from './http-requests-routing.module';
import { HttpRequestsComponent } from './http-requests.component';

@NgModule({
  declarations: [HttpRequestsComponent],
  imports: [CommonModule, HttpRequestsRoutingModule, MatCardModule],
})
export class HttpRequestsModule {}
