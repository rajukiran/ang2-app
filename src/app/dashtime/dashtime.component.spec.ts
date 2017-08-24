import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtimeComponent } from './dashtime.component';

describe('DashtimeComponent', () => {
  let component: DashtimeComponent;
  let fixture: ComponentFixture<DashtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
