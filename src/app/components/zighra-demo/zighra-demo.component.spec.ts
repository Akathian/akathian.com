import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZighraDemoComponent } from './zighra-demo.component';

describe('ZighraDemoComponent', () => {
  let component: ZighraDemoComponent;
  let fixture: ComponentFixture<ZighraDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZighraDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZighraDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
