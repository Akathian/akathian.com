import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCardsComponent } from './template-cards.component';

describe('TemplateCardsComponent', () => {
  let component: TemplateCardsComponent;
  let fixture: ComponentFixture<TemplateCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
