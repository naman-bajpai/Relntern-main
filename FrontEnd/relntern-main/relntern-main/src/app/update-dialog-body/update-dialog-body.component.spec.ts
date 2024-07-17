import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogBodyComponent } from './update-dialog-body.component';

describe('UpdateDialogBodyComponent', () => {
  let component: UpdateDialogBodyComponent;
  let fixture: ComponentFixture<UpdateDialogBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDialogBodyComponent]
    });
    fixture = TestBed.createComponent(UpdateDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
