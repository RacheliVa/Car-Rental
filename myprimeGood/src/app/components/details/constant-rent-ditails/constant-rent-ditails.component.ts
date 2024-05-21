import { Component, OnInit ,Input} from '@angular/core';
import { constantRent } from '../../../classes/constantRent';
import { CarsServiceService } from '../../../services/cars-service.service';
import { car } from '../../../classes/car';
import { OrderService } from '../../../services/order.service';


@Component({
  selector: 'app-constant-rent-ditails',
  templateUrl: './constant-rent-ditails.component.html',
  styleUrls: ['./constant-rent-ditails.component.css']
})
export class ConstantRentDitailsComponent implements OnInit {

  constructor(private carService:CarsServiceService,private orderService:OrderService) { }
  @Input() constantRent:constantRent;
  @Input() status:string;
  car:car
  ngOnInit() {
  }
  showCarDetails(){
    this.orderService.cuurentRent=this.constantRent
    this.carService.getCarsByCarId(this.constantRent.carID).subscribe(
      myData=>{this.car=myData;console.log(myData);},
      err=>alert(err.message));
  }
}
