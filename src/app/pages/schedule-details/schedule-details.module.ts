import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScheduleDetailsComponent } from './schedule-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ScheduleDetailsComponent],
  exports: [ScheduleDetailsComponent],
})
export class ScheduleDetailsModule {
}
