import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersmenuComponent } from './trainersmenu.component';

describe('TrainersmenuComponent', () => {
  let component: TrainersmenuComponent;
  let fixture: ComponentFixture<TrainersmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
