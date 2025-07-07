import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCaruselComponent } from './landing-carusel.component';

describe('LandingCaruselComponent', () => {
  let component: LandingCaruselComponent;
  let fixture: ComponentFixture<LandingCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingCaruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
