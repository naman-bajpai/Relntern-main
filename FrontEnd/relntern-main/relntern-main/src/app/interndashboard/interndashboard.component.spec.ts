import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterndashboardComponent } from './interndashboard.component';

describe('InterndashboardComponent', () => {
  let component: InterndashboardComponent;
  let fixture: ComponentFixture<InterndashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterndashboardComponent]
    });
    fixture = TestBed.createComponent(InterndashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
