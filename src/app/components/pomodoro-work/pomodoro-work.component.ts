import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-pomodoro-work',
  templateUrl: './pomodoro-work.component.html',
  styleUrls: ['./pomodoro-work.component.css']
})
export class PomodoroWorkComponent implements OnInit, OnDestroy {

  countDown: Subscription;

  counter = 30; // in seconds
  tick = 1000;

  ngOnInit() {
    this.countDown = timer(0, this.tick)
      .subscribe(() => { 
      if(this.counter > 0) 
        --this.counter
      else 
        this.ngOnDestroy();
      });
  }
  ngOnDestroy(){
      this.countDown = null;
  }
}
