import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveprofiledialogComponent } from './inactiveprofiledialog.component';

describe('InactiveprofiledialogComponent', () => {
  let component: InactiveprofiledialogComponent;
  let fixture: ComponentFixture<InactiveprofiledialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveprofiledialogComponent]
    });
    fixture = TestBed.createComponent(InactiveprofiledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
