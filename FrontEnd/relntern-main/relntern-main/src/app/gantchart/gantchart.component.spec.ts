import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantchartComponent } from './gantchart.component';

describe('GantchartComponent', () => {
  let component: GantchartComponent;
  let fixture: ComponentFixture<GantchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GantchartComponent]
    });
    fixture = TestBed.createComponent(GantchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
