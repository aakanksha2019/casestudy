import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtrainingsComponent } from './searchtrainings.component';

describe('SearchtrainingsComponent', () => {
  let component: SearchtrainingsComponent;
  let fixture: ComponentFixture<SearchtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
