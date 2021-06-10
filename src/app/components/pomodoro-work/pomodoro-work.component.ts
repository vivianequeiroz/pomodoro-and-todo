import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-pomodoro-work',
  templateUrl: './pomodoro-work.component.html',
  styleUrls: ['./pomodoro-work.component.css']
})
export class PomodoroWorkComponent implements OnInit, OnDestroy {

  workTimer: Subscription;

  counter = 41; // in seconds
  tick = 1000;

  ngOnInit() {
    console.log('workTimer')
    this.workTimer = timer(0, this.tick)
      .subscribe(() => { 
      if(this.counter > 0) 
        --this.counter
      else 
        this.ngOnDestroy();
      });
      
  }
  ngOnDestroy(){
      this.workTimer = null;
  }
}
