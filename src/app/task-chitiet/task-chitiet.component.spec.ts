import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChitietComponent } from './task-chitiet.component';

describe('TaskChitietComponent', () => {
  let component: TaskChitietComponent;
  let fixture: ComponentFixture<TaskChitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskChitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
