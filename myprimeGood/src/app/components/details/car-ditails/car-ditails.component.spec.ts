import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDitailsComponent } from './car-ditails.component';

describe('CarDitailsComponent', () => {
  let component: CarDitailsComponent;
  let fixture: ComponentFixture<CarDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
