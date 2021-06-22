import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCircleComponent } from './nav-circle.component';

describe('NavCircleComponent', () => {
  let component: NavCircleComponent;
  let fixture: ComponentFixture<NavCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
