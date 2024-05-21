import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from '../../services/cars-service.service';
import { UsersServerService } from '../../services/users-server.service';
import { car } from '../../classes/car';
import { disposableRent } from '../../classes/disposableRent';
import { constantRent } from '../../classes/constantRent';
import { IRent } from '../../classes/IRent';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.css']
})
export class RentingComponent implements OnInit {

  constructor(private UsersServer:UsersServerService,private carService:CarsServiceService,private rentService:RentService) { }
  disposableRents:disposableRent[]=new Array<disposableRent>();
  constantRents:constantRent[]=new Array<constantRent>();
  getRentings(Car){
   
    this.rentService.getRentsByCarID(Car.carID).subscribe(
      myData=>{ console.log(myData);this.carRentsDevider(myData);},
      err=>alert(err.message));
  }
  //מחלק את רשימת ההשכרות שהתקבלו לחד פעמיות ולקבועות בשביל להציג אותם
  carRentsDevider(rents: Array<IRent>){
     rents.forEach(r => { if (r instanceof disposableRent) this.disposableRents.push(r as disposableRent);
       else this.constantRents.push(r as constantRent);
     });
   }
getCarsRenting(){
  this.carService.userCars.forEach(c=>this.getRentings(c));
}
  ngOnInit() {
  // this.getCarsRenting()
  }
  popAddRent(status:string){
    this.UsersServer.pop(status,'popAddRent')
    }
  // addDis(){
  // this.UsersServer.pop('close','popAddRent')}

}
