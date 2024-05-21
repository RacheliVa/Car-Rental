import { Component, OnInit, Input } from '@angular/core';
import { order } from '../../../classes/order';

@Component({
  selector: 'app-order-ditails',
  templateUrl: './order-ditails.component.html',
  styleUrls: ['./order-ditails.component.css']
})
export class OrderDitailsComponent implements OnInit {
  @Input() Order :order;
  constructor() { }

  ngOnInit() {
  }

}
