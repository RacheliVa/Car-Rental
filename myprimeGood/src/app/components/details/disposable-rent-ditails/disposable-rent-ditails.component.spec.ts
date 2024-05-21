import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposableRentDitailsComponent } from './disposable-rent-ditails.component';

describe('DisposableRentDitailsComponent', () => {
  let component: DisposableRentDitailsComponent;
  let fixture: ComponentFixture<DisposableRentDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposableRentDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposableRentDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
