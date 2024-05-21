import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDitailsComponent } from './order-ditails.component';

describe('OrderDitailsComponent', () => {
  let component: OrderDitailsComponent;
  let fixture: ComponentFixture<OrderDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
