import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TimerCardComponent } from './components/timer-card/timer-card.component';
import { TimerCardModule } from './components/timer-card/timer-card.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TimerCardComponent],
  imports: [BrowserModule, AppRoutingModule, TimerCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
