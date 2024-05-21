import { Component, OnInit } from '@angular/core';
import { order } from '../../classes/order';
import { CarsServiceService } from '../../services/cars-service.service';
import { UsersServerService } from '../../services/users-server.service';
import { car } from '../../classes/car';
import { OrderService } from '../../services/order.service';
import { IRent } from '../../classes/IRent';
import { constantRent } from '../../classes/constantRent';
import { disposableRent } from '../../classes/disposableRent';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {

  ngOnInit(){
    this.getOrdersByUserID()
  }
  constructor(private orderService:OrderService,private userService:UsersServerService,private carService:CarsServiceService) { }
   myOrder:order=new order()
   startHour:string
   startMinute:string
   endHour:string
   endMinute:string
   
   saveTime(){
    this.myOrder.startHour="{"+this.startHour+":"+this.startMinute+"}";
    this.myOrder.endHour="{"+this.endHour+":"+this.endMinute+"}";
     }
       
     search(){
      this.saveTime()
      this.myOrder.rentID=0
      this.orderService.order=this.myOrder
      console.log(this.myOrder)
      this.orderService.searchOrAdd(this.myOrder).subscribe(
      myData=>{this.orderService.rents=myData;console.log(myData);this.orderService.rentsListsDevider();this.myOrder=new order()},
      err=>alert(err.message));
  }

 
 getOrdersByUserID(){
  this.orderService.getOrdersByUserId(this.userService.currentUser.userID).subscribe(
    myData=>{this.orderService.userOrders=myData;console.log(myData);},
    err=>alert(err.message));
 }
}
    
  
