import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsuccessComponent } from './internsuccess.component';

describe('InternsuccessComponent', () => {
  let component: InternsuccessComponent;
  let fixture: ComponentFixture<InternsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternsuccessComponent]
    });
    fixture = TestBed.createComponent(InternsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
