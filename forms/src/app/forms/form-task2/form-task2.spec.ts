import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTask2 } from './form-task2';

describe('FormTask2', () => {
  let component: FormTask2;
  let fixture: ComponentFixture<FormTask2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTask2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTask2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
