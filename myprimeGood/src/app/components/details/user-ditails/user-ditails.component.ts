import { Component, OnInit, Input } from '@angular/core';
import { user } from '../../../classes/user';
import { CarsServiceService } from '../../../services/cars-service.service';
import { car } from '../../../classes/car';
import { UsersServerService } from '../../../services/users-server.service';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'app-user-ditails',
  templateUrl: './user-ditails.component.html',
  styleUrls: ['./user-ditails.component.css']
})
export class UserDitailsComponent implements OnInit {

  @Input() user:user;
  @Input() status:string;
  constructor(private carService:CarsServiceService,private userService:UsersServerService,private groupService :GroupsService) { }
  userCars:Array<car>;
  userDetaild:boolean=false;
  isShowUserCars:boolean=false;
  ngOnInit() {
  }
getUserCars(){
 this. userDetaild=!this.userDetaild;
this.carService.getCarsByUserId(this.user.userID).subscribe(
  myData=>{this.userCars=myData;console.log(myData);},
  err=>alert(err.message));
}
deleteUser(delUser:user){
  this.userService.deleteUser(delUser.userID,this.groupService.currentGroup.groupID).subscribe(
    myData=>{this.groupService.groupUsers=myData},
    err=>alert(err.message));
} 
getUsersByGroupID()
{
  this.userService.getUsersByGroupID(this.groupService.currentGroup.groupID).subscribe(
    myData=>{this.groupService.groupUsers=myData;console.log(myData);},
  err=>alert(err.message));
}
showUserCars(u:user){
  this.isShowUserCars=!this.isShowUserCars;
this.getUserCars();
}
}
