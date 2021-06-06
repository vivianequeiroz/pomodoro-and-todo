import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroCountdownComponent } from './components/pomodoro-coutdown/pomodoro-countdown';
import { WorkTimer } from 'src/app/modules/pomodoro-modules/work-timer';
import { WorkTimerService } from './services/pomodoro-services/work-timer.service';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroCountdownComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    WorkTimer,
    WorkTimerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
