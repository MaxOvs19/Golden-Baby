import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkReturnModule } from '@ui/link-return';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule, LinkReturnModule],
})
export class ScheduleModule {}
