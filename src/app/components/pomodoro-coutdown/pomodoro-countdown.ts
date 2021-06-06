import { Component, OnInit } from '@angular/core';
import { WorkTimerService } from 'src/app/services/pomodoro-services/work-timer.service';

@Component({
  selector: 'app-pomodoro-countdown',
  templateUrl: './pomodoro-countdown.component.html',
  styleUrls: ['./pomodoro-countdown.component.css']
})
export class PomodoroCountdownComponent implements OnInit {

  sec : number;
  min : number;

  constructor(
    private workTimerService : WorkTimerService,
  ) {}

  ngOnInit(): void {
    this.initWorkTimer();
  }
  
  initWorkTimer(): void {
    this.workTimerService.workTimerSeconds(this.sec);
    this.workTimerService.workTimerMinutes(this.min);
  }
}