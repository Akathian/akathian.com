import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextClusteringComponent } from './text-clustering.component';

describe('TextClusteringComponent', () => {
  let component: TextClusteringComponent;
  let fixture: ComponentFixture<TextClusteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextClusteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextClusteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 