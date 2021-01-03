import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSectComponent } from './template-sect.component';

describe('TemplateSectComponent', () => {
  let component: TemplateSectComponent;
  let fixture: ComponentFixture<TemplateSectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
