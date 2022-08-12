import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpRequestsRoutingModule } from './http-requests-routing.module';
import { HttpRequestsComponent } from './http-requests.component';

@NgModule({
  declarations: [HttpRequestsComponent],
  imports: [CommonModule, HttpClientModule, HttpRequestsRoutingModule],
})
export class HttpRequestsModule {}
