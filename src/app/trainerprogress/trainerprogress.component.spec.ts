import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerprogressComponent } from './trainerprogress.component';

describe('TrainerprogressComponent', () => {
  let component: TrainerprogressComponent;
  let fixture: ComponentFixture<TrainerprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
