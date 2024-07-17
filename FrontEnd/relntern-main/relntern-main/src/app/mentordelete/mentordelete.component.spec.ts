import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentordeleteComponent } from './mentordelete.component';

describe('MentordeleteComponent', () => {
  let component: MentordeleteComponent;
  let fixture: ComponentFixture<MentordeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentordeleteComponent]
    });
    fixture = TestBed.createComponent(MentordeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
