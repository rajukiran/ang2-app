import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnewsComponent } from './dashnews.component';

describe('DashnewsComponent', () => {
  let component: DashnewsComponent;
  let fixture: ComponentFixture<DashnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
