import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveDeleteComponent } from './inactive-delete.component';

describe('InactiveDeleteComponent', () => {
  let component: InactiveDeleteComponent;
  let fixture: ComponentFixture<InactiveDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveDeleteComponent]
    });
    fixture = TestBed.createComponent(InactiveDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
