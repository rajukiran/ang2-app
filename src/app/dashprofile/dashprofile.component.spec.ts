import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashprofileComponent } from './dashprofile.component';

describe('DashprofileComponent', () => {
  let component: DashprofileComponent;
  let fixture: ComponentFixture<DashprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
