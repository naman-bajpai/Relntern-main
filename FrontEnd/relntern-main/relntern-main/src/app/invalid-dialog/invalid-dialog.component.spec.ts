import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidDialogComponent } from './invalid-dialog.component';

describe('InvalidDialogComponent', () => {
  let component: InvalidDialogComponent;
  let fixture: ComponentFixture<InvalidDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidDialogComponent]
    });
    fixture = TestBed.createComponent(InvalidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
