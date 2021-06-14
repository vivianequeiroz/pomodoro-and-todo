// import { Component, OnInit, OnDestroy } from "@angular/core";
// import { timer, Subscription } from "rxjs";

// @Component({
//   selector: "app-pomodoro-rest",
//   templateUrl: "./pomodoro-rest.component.html",
//   styleUrls: ["./pomodoro-rest.component.css"]
// })
// export class PomodoroRestComponent implements OnInit, OnDestroy {

//   countDown: Subscription;

//   counter = 30; // in seconds
//   tick = 1000;

//   ngOnInit() {
//     this.countDown = timer(0, this.tick)
//       .subscribe(() => { 
//       if(this.counter > 0) 
//         --this.counter
//       else 
//         this.ngOnDestroy();
//       });
      
//   }
//   ngOnDestroy(){
//       this.countDown = null;
//   }
// }

