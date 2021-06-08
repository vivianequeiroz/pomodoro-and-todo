import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroCountdownComponent } from './components/pomodoro-coutdown/pomodoro-countdown';
import { WorkTimerService } from './services/pomodoro-services/work-timer.service';
import { RestTimerService } from './services/pomodoro-services/rest-timer.service';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroCountdownComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    WorkTimerService,
    RestTimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
