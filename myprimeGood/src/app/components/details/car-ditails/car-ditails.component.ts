import { Component, OnInit, Input } from '@angular/core';
import { car } from '../../../classes/car';
import { CarsServiceService } from '../../../services/cars-service.service';
import { UsersServerService } from '../../../services/users-server.service';
import { disposableRent } from '../../../classes/disposableRent';
import { IRent } from '../../../classes/IRent';
import { constantRent } from '../../../classes/constantRent';
import { RentService } from '../../../services/rent.service';
import { OrderService } from '../../../services/order.service';
import {MessageService} from 'primeng/api'
@Component({
  selector: 'app-car-ditails',
  templateUrl: './car-ditails.component.html',
  styleUrls: ['./car-ditails.component.css']
})
export class CarDitailsComponent implements OnInit {
  @Input() Car :car;
  @Input() status :string;
  UpdateCar :car;
  isUpdate:boolean=false;
  isShowCarRents:boolean=false;
  rentsOfCar:Array<IRent>;
  disposableRents:disposableRent[]=new Array<disposableRent>();
  constantRents:constantRent[]=new Array<constantRent>();
    constructor(private carService:CarsServiceService,private userService:UsersServerService,
      private rentService:RentService,private orderService:OrderService,private MessageService:MessageService) { }
  
    ngOnInit() {
      if(this.Car)
      { this.UpdateCar=new car();
        this.UpdateCar.carID=this.Car.carID;
        this.UpdateCar.onerID=this.Car.onerID;
        this.UpdateCar.model=this.Car.model;
        this.UpdateCar.yearProduce=this.Car.yearProduce;
        this.UpdateCar.babySeat=this.Car.babySeat;
        this.UpdateCar.handicappedCar=this.Car.handicappedCar;
        this.UpdateCar.priceForHour=this.Car.priceForHour;
        this.UpdateCar.discription=this.Car.discription; 
        this.UpdateCar.numSeats=this.Car.numSeats;
      }
     
      else
      this.UpdateCar=new car();
    }

//בדיקה האם יש השכרות לרכב הנוכחי
checkRentOfCar(){
  this.rentService.getRentsByCarID(this.Car.carID).subscribe(
    myData=>{ console.log(myData);this.rentsOfCar=myData;this.dialogDeleteCar();},
    err=>alert(err.message));
    
}


//דו שיח למחיקת רכב
dialogDeleteCar(){
  if(this.rentsOfCar.length>0)  
    alert(this.rentsOfCar);
    else
    alert("there is no rent");
}


    deleteCarById(delCar:car){
      this.carService.deleteCar(delCar.carID).subscribe(
        myData=>{this.carService.userCars=myData},
        err=>alert(err.message));
    } 
   
    updateCarDetails(){
        this.carService.updateCar(this.UpdateCar).subscribe(
          myData=>{this.Car=this.UpdateCar;console.log(myData); this.isUpdate=false;},
          err=>alert(err.message));
       
    }
    addCar(){
      this.UpdateCar.onerID=this.userService.currentUser.userID;
        this.carService.addCar(this.UpdateCar).subscribe(
          myData=>{this.carService.userCars=myData;console.log(myData);this.carService.isCreateCar=false},
          err=>alert(err.message));
    }
  
    cancleUpdateCar(){
    console.log("cancleUpdateCar");
    this.UpdateCar.carID=this.Car.carID;
    this.UpdateCar.onerID=this.Car.onerID;
    this.UpdateCar.model=this.Car.model;
    this.UpdateCar.yearProduce=this.Car.yearProduce;
    this.UpdateCar.babySeat=this.Car.babySeat;
    this.UpdateCar.handicappedCar=this.Car.handicappedCar;
    this.UpdateCar.priceForHour=this.Car.priceForHour;
    this.UpdateCar.discription=this.Car.discription; 
    this.UpdateCar.numSeats=this.Car.numSeats;
    }
   
    showRentings(Car){
      this.isShowCarRents=!this.isShowCarRents;
      this.rentService.getRentsByCarID(Car.carID).subscribe(
        myData=>{ console.log(myData);this.carRentsDevider(myData);},
        err=>alert(err.message));
    }
    //מחלק את רשימת ההשכרות שהתקבלו לחד פעמיות ולקבועות בשביל להציג אותם
    carRentsDevider(rents: Array<IRent>){
      if(this.constantRents.length==0&&this.disposableRents.length==0)
       rents.forEach(r => { if (r instanceof disposableRent) this.disposableRents.push(r as disposableRent);
         else this.constantRents.push(r as constantRent);
       });
     }

     order(){
      this.orderService.order.userID=this.userService.currentUser.userID
      this.orderService.addOrder() .subscribe(
        myData=>{this.orderService.userOrders=myData;this.orderService.clearRentsLists(); console.log(myData);},
        err=>alert(err.message));
     }

    
     onReject(){alert("onReject")}
     onConfirm(){alert("onConfirm")}
  }
  