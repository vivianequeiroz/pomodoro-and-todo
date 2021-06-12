import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroRestComponent } from './components/pomodoro-rest/pomodoro-rest.component';
import { PomodoroWorkComponent } from './components/pomodoro-work/pomodoro-work.component';

const routes: Routes = [
  { path: 'rest', component: PomodoroRestComponent },
  { path: 'work', component: PomodoroWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }