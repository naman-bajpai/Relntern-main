import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveComponent } from './inactive.component';

describe('InactiveComponent', () => {
  let component: InactiveComponent;
  let fixture: ComponentFixture<InactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveComponent]
    });
    fixture = TestBed.createComponent(InactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
