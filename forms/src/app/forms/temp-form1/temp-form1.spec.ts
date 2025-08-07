import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempForm1 } from './temp-form1';

describe('TempForm1', () => {
  let component: TempForm1;
  let fixture: ComponentFixture<TempForm1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempForm1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempForm1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
