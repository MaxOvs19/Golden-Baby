import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMainPageComponent } from './slider-main-page.component';

describe('SliderMainPageComponent', () => {
  let component: SliderMainPageComponent;
  let fixture: ComponentFixture<SliderMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
