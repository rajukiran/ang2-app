import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessreportComponent } from './successreport.component';

describe('SuccessreportComponent', () => {
  let component: SuccessreportComponent;
  let fixture: ComponentFixture<SuccessreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
