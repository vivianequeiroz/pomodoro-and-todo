import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestTimerService {

  constructor() {}

  restTimer(): void {
    const totalRestTime = timer(1000);
    totalRestTime.subscribe(() => {
      console.log('teste');
    })
  }
}