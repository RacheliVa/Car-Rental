import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDitailsComponent } from './request-ditails.component';

describe('RequestDitailsComponent', () => {
  let component: RequestDitailsComponent;
  let fixture: ComponentFixture<RequestDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
