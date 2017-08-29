import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplantlistComponent } from './complantlist.component';

describe('ComplantlistComponent', () => {
  let component: ComplantlistComponent;
  let fixture: ComponentFixture<ComplantlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplantlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
