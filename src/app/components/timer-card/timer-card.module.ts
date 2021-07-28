import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerCardComponent } from './timer-card.component';

@NgModule({
  declarations: [TimerCardComponent],
  imports: [CommonModule],
  exports: [TimerCardComponent],
})
export class TimerCardModule {}
