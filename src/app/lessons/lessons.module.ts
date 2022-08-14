import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';

@NgModule({
  declarations: [LessonsComponent],
  imports: [CommonModule, LessonsRoutingModule, MatCardModule],
})
export class LessonsModule {}
