import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloths } from './cloths';

describe('Cloths', () => {
  let component: Cloths;
  let fixture: ComponentFixture<Cloths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloths]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
