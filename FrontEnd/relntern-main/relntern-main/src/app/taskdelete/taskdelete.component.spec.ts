import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdeleteComponent } from './taskdelete.component';

describe('TaskdeleteComponent', () => {
  let component: TaskdeleteComponent;
  let fixture: ComponentFixture<TaskdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskdeleteComponent]
    });
    fixture = TestBed.createComponent(TaskdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
