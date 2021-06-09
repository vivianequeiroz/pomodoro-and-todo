import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroRestComponent } from './components/pomodoro-rest/pomodoro-rest.component';
import { WorkTimerService } from './services/pomodoro-services/work-timer.service';
import { RestTimerService } from './services/pomodoro-services/rest-timer.service';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PomodoroRestComponent,
    FormatTimePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [
    WorkTimerService,
    RestTimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
