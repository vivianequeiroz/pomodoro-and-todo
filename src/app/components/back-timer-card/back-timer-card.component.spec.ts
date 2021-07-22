import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTimerCardComponent } from './back-timer-card.component';

describe('BackTimerCardComponent', () => {
  let component: BackTimerCardComponent;
  let fixture: ComponentFixture<BackTimerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTimerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTimerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
