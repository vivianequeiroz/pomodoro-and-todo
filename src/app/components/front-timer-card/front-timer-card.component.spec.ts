import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTimerCardComponent } from './front-timer-card.component';

describe('FrontTimerCardComponent', () => {
  let component: FrontTimerCardComponent;
  let fixture: ComponentFixture<FrontTimerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontTimerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTimerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
