import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordmapComponent } from './coordmap.component';

describe('CoordmapComponent', () => {
  let component: CoordmapComponent;
  let fixture: ComponentFixture<CoordmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoordmapComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
