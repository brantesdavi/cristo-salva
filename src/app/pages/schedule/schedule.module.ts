import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScheduleComponent } from './schedule.component';
import { CardScheduleModule } from '../../components/card-schedule/card-schedule.module';

@NgModule({
  imports: [CommonModule, CardScheduleModule],
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent],
})
export class ScheduleModule {

  
}
