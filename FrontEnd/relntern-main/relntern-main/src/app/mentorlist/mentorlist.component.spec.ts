import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorlistComponent } from './mentorlist.component';

describe('MentorlistComponent', () => {
  let component: MentorlistComponent;
  let fixture: ComponentFixture<MentorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorlistComponent]
    });
    fixture = TestBed.createComponent(MentorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
