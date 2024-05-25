import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardScheduleComponent } from './card-schedule.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterOutlet, RouterModule],
  declarations: [CardScheduleComponent],
  exports: [CardScheduleComponent],
})
export class CardScheduleModule {}
