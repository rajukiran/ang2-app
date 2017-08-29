import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuecomplantComponent } from './issuecomplant.component';

describe('IssuecomplantComponent', () => {
  let component: IssuecomplantComponent;
  let fixture: ComponentFixture<IssuecomplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuecomplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuecomplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
