import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css'],
})
export class TimerCardComponent implements OnInit {
  showBackCard: boolean = false;
  @Output() flipBackCard = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
