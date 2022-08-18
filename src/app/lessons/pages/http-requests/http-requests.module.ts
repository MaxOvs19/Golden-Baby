import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HttpRequestsRoutingModule } from './http-requests-routing.module';
import { HttpRequestsComponent } from './http-requests.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HttpRequestsComponent],
  imports: [CommonModule, HttpRequestsRoutingModule, MatCardModule, ReactiveFormsModule],
})
export class HttpRequestsModule {}
