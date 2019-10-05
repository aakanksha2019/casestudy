import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintechComponent } from './admintech.component';

describe('AdmintechComponent', () => {
  let component: AdmintechComponent;
  let fixture: ComponentFixture<AdmintechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
