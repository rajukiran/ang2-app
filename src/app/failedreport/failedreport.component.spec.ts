import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedreportComponent } from './failedreport.component';

describe('FailedreportComponent', () => {
  let component: FailedreportComponent;
  let fixture: ComponentFixture<FailedreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
