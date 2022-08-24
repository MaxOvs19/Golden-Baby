import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HttpRequestsRoutingModule } from './http-requests-routing.module';
import { HttpRequestsComponent } from './http-requests.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [HttpRequestsComponent, UserComponent],
  imports: [CommonModule, HttpRequestsRoutingModule, MatCardModule, ReactiveFormsModule],
})
export class HttpRequestsModule {}
