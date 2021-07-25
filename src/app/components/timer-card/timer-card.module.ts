import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontTimerCardComponent } from '../front-timer-card/front-timer-card.component';
import { BackTimerCardComponent } from '../back-timer-card/back-timer-card.component';

@NgModule({
  declarations: [FrontTimerCardComponent, BackTimerCardComponent],
  imports: [CommonModule],
  exports: [FrontTimerCardComponent, BackTimerCardComponent],
})
export class TimerCardModule {}
