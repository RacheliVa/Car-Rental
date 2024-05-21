import { Component, OnInit, Input } from '@angular/core';
import { disposableRent } from '../../../classes/disposableRent';
import { CarsServiceService } from '../../../services/cars-service.service';
import { car } from '../../../classes/car';
import { OrderService } from '../../../services/order.service';


@Component({
  selector: 'app-disposable-rent-ditails',
  templateUrl: './disposable-rent-ditails.component.html',
  styleUrls: ['./disposable-rent-ditails.component.css']
})
export class DisposableRentDitailsComponent implements OnInit {

  constructor(private carService:CarsServiceService,private orderService:OrderService) { }
@Input() disposableRent:disposableRent;
@Input() status:string;
car:car
  ngOnInit() {
  }
  showCarDetails(){
    this.orderService.cuurentRent=this.disposableRent
    this.carService.getCarsByCarId(this.disposableRent.carID).subscribe(
      myData=>{this.car=myData;console.log(myData);},
      err=>alert(err.message));
  }
}
