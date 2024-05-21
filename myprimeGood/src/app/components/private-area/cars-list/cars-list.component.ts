import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../../services/users-server.service';
import { CarsServiceService } from '../../../services/cars-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(private carService:CarsServiceService,private userService:UsersServerService) { }

  ngOnInit() {
    this.getUserCars()
  }

  getUserCars(){
    this.carService.getCarsByUserId(this.userService.currentUser.userID).subscribe(
      myData=>{this.carService.userCars=myData;console.log(myData);},
      err=>alert(err.message));
    }
   
}
