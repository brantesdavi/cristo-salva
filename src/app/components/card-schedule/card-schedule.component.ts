import { Component, Input, PipeTransform  } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-card-schedule',
  templateUrl: './card-schedule.component.html',
})
export class CardScheduleComponent {

  @Input() schedule: any;

  constructor(private router: Router) {}
  
  getTimeFromDateTime(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

}
