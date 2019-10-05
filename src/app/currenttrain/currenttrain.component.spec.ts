import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrainComponent } from './currenttrain.component';

describe('CurrenttrainComponent', () => {
  let component: CurrenttrainComponent;
  let fixture: ComponentFixture<CurrenttrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenttrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
