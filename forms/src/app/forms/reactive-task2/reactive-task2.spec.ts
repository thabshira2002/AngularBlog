import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTask2 } from './reactive-task2';

describe('ReactiveTask2', () => {
  let component: ReactiveTask2;
  let fixture: ComponentFixture<ReactiveTask2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveTask2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveTask2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
