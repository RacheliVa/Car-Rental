import { Component, OnInit,OnDestroy } from '@angular/core';
import { disposableRent } from '../../../classes/disposableRent';
import { constantRent } from '../../../classes/constantRent';
import { CarsServiceService } from '../../../services/cars-service.service';
import { Time } from '../../../classes/Time';
import { UsersServerService } from '../../../services/users-server.service';
import { RentService } from '../../../services/rent.service';
// import { DaysOptionPipe } from '../../../pipes/days-option.pipe';


@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit{
  
  constructor(private carService:CarsServiceService,private usersService:UsersServerService,private rentService:RentService) { }
currentDisposableRent=new disposableRent();
currentConstantRent=new constantRent();
isShowButton=true;
isDis=false;
isCons=false;
ListNumDays:Array<number>= new Array<number>(1,2,3,4,5,6,7,8,9);
hourFrom:string;
minuteFrom:string;
hourTo:string;
minuteTo:string;



  ngOnInit() {
 
  }

saveTime(){

//לא עובד
// if(this.minuteFrom.length==1)
// this.minuteFrom="0"+this.minuteFrom;
// if(this.minuteTo.length==1)
// this.minuteTo="0"+this.minuteTo;
  // בדיקה באיזו השכרה אנו מטפלים כרגע
 if(this.currentDisposableRent.carID)
 {
this.currentDisposableRent.hourFrom="{"+this.hourFrom+":"+this.minuteFrom+"}";
this.currentDisposableRent.hourTo="{"+this.hourTo+":"+this.minuteTo+"}";
 }
 else
 {
  this.currentConstantRent.hourFrom="{"+this.hourFrom+":"+this.minuteFrom+"}";
  this.currentConstantRent.hourTo="{"+this.hourTo+":"+this.minuteTo+"}";
   }
   
}


  addDis(){
    this.saveTime();
    this.rentService.addRent(this.currentDisposableRent).subscribe(
      myData=>{console.log(myData);   this.usersService.pop('close','popAddRent')},
      err=>alert(err.message)
    )
    this.usersService.pop('close','popAddRent')
  }
  addCons(){
    this.saveTime();
    this.usersService.pop('close','popAddRent')
    this.rentService.addRent(this.currentConstantRent).subscribe(
      myData=>{console.log(myData);this.usersService.pop('close','popAddRent')},
      err=>alert(err.message)
    )
  }
  closePop(){
  this.usersService.pop('close','popAddRent')
}
}
