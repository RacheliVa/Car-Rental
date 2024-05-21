import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantRentDitailsComponent } from './constant-rent-ditails.component';

describe('ConstantRentDitailsComponent', () => {
  let component: ConstantRentDitailsComponent;
  let fixture: ComponentFixture<ConstantRentDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantRentDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantRentDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
