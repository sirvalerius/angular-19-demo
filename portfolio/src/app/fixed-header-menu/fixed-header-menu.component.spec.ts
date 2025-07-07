import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedHeaderMenuComponent } from './fixed-header-menu.component';

describe('FixedHeaderMenuComponent', () => {
  let component: FixedHeaderMenuComponent;
  let fixture: ComponentFixture<FixedHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedHeaderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
