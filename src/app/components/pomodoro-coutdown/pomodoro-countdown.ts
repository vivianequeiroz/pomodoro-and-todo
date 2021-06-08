import { Component, OnInit } from '@angular/core';
import { RestTimerService } from 'src/app/services/pomodoro-services/rest-timer.service';
@Component({
  selector: 'app-pomodoro-countdown',
  templateUrl: './pomodoro-countdown.component.html',
  styleUrls: ['./pomodoro-countdown.component.css']
})
export class PomodoroCountdownComponent implements OnInit {

  constructor(
    private rest : RestTimerService,
  ) {}

  ngOnInit(): void {
    this.rest.restTimer();
  }

}