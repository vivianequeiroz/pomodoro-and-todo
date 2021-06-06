import { Injectable } from '@angular/core';
import { WorkTimer } from 'src/app/modules/pomodoro-modules/work-timer';

@Injectable({
  providedIn: 'root'
})
export class WorkTimerService {

  constructor(
    private workTimer : WorkTimer,
  ) {}

  workTimerSeconds(sec): number {
    this.workTimer.sec = 30;
    sec = this.workTimer.sec;
    setInterval(() => {
      this.workTimer.sec -= -1;
      this.setUpdateSecValue();
    }, sec * 500); 
    console.log(this.workTimerMinutes(sec))
    if(this.workTimer.sec === 0) 
        clearInterval(); 
    return sec;
  }

  workTimerMinutes(min: number): number {
    this.workTimer.min = 1;
    min = this.workTimer.min;
    setInterval(() => {
      this.workTimer.min -= -1;
      this.setUpdateMinValue();
    }, min * 1000);
    console.log(this.workTimerMinutes(min));
    if(this.workTimer.min === 0) 
        clearInterval(); 
    return min;
  }

  setUpdateSecValue(): number {
    return this.workTimer.sec;
  }

  setUpdateMinValue(): number {
    return this.workTimer.min;
  }
}