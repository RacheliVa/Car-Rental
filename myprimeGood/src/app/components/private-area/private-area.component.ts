import { Component, OnInit } from '@angular/core';
import { UsersServerService } from 'src/app/services/users-server.service';
import { user } from 'src/app/classes/user';
import { request } from 'src/app/classes/request';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {
  constructor(private UsersService:UsersServerService,private requestService:RequestService) { };
  newRequest=new request();
  saveChanges(){
    this.UsersService.updateUser(this.UsersService.currentUser).subscribe(
      myData=>{console.log(myData);},
      err=>alert(err.message));
  }

  register(){
    this.newRequest.userName=this.UsersService.currentUser.userName;
    this.newRequest.password=this.UsersService.currentUser.password;
    this.requestService.register(this.newRequest).subscribe(
      myData=>{console.log(myData)},
      err=>{}
    );
  }

  ngOnInit() {
  }

}
