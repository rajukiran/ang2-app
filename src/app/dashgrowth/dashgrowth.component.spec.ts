import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashgrowthComponent } from './dashgrowth.component';

describe('DashgrowthComponent', () => {
  let component: DashgrowthComponent;
  let fixture: ComponentFixture<DashgrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashgrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashgrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
