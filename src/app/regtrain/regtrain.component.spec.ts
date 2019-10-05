import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegtrainComponent } from './regtrain.component';

describe('RegtrainComponent', () => {
  let component: RegtrainComponent;
  let fixture: ComponentFixture<RegtrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegtrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
