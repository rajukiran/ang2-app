import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashwallettransaComponent } from './dashwallettransa.component';

describe('DashwallettransaComponent', () => {
  let component: DashwallettransaComponent;
  let fixture: ComponentFixture<DashwallettransaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashwallettransaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashwallettransaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
