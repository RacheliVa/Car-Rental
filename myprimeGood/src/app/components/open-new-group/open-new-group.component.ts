import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../services/users-server.service';
import { user } from '../../classes/user';
import { group } from '../../classes/group';
import { GroupsService } from '../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-new-group',
  templateUrl: './open-new-group.component.html',
  styleUrls: ['./open-new-group.component.css']
})
export class OpenNewGroupComponent implements OnInit {

  constructor(private UserService:UsersServerService,private GroupsService:GroupsService,private router:Router) { }
userAdministrator=new user();
group=new group();
  userRegister(){
    //הגדרת משתמש כמנהל
    this.userAdministrator.administrator=true;

    console.log(this.userAdministrator);

    //הוספת המשתמש
    this.UserService.addUser(this.userAdministrator).subscribe(
      myData=>{console.log(myData)},
      err=>alert(err.message));
      
      //מציאת המשתמש 
      this.UserService.login(this.userAdministrator.userName,this.userAdministrator.password).subscribe(
        myData=>{this.UserService.currentUser=myData;console.log(myData)},
      err=>alert(err.message));
  }

  //הפיכת משתמש רגיל למנהל
  updateUserDetails(){
    this.UserService.currentUser.administrator=true;
    this.UserService.updateUser(this.UserService.currentUser).subscribe(
      myData=>{console.log(myData);},
      err=>alert(err.message));
   
}

  openGroup(){
    if(!this.userAdministrator.userID)
    this.updateUserDetails();
   this.group.groupManagerID=this.UserService.currentUser.userID;
   this.GroupsService.openGroup(this.group).subscribe(
    myData=>{;console.log(myData)},
    err=>alert(err.message));
  }
  cancle(){
    this.router.navigate(['Home']);
  }


  ngOnInit() {
  }

}
