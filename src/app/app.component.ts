import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ScheduleModule } from './pages/schedule/schedule.module';
import { ScheduleDetailsModule } from './pages/schedule-details/schedule-details.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ScheduleModule, ScheduleDetailsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cristo-salva';
}
