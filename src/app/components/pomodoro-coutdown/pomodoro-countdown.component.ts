import { Component, OnInit, OnDestroy } from "@angular/core";
import { timer, Subscription } from "rxjs";

@Component({
  selector: "app-pomodoro-countdown",
  templateUrl: "./pomodoro-countdown.component.html",
  styleUrls: ["./pomodoro-countdown.component.css"]
})
export class PomodoroCountdownComponent implements OnInit, OnDestroy {

  countDown: Subscription;

  counter = 301;
  tick = 1000;

  ngOnInit() {
    this.countDown = timer(0, this.tick)
      .subscribe(() => --this.counter);
  }
  ngOnDestroy(){
    this.countDown = null;
  }
}

