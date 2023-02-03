import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvChitietComponent } from './nv-chitiet.component';

describe('NvChitietComponent', () => {
  let component: NvChitietComponent;
  let fixture: ComponentFixture<NvChitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvChitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
