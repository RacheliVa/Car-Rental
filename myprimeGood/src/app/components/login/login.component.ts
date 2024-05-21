import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../services/users-server.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsersServer:UsersServerService,private router:Router) { }
  userName:string;
  password:string;
  ngOnInit() {
    
  }
  // null פניה לפונקציה 'לוגין' בסרויס המקבלת שם משתמש וסיסמא ובודקת בסרבר אם הוא קיים, אם כן שומרת אותו בסרויס ואם לא מחזירה    
  Login( )
  {
    this.router.navigate(['']);
    this.UsersServer.login(this.userName,this.password).subscribe(
      myData=>{this.UsersServer.currentUser=myData;console.log(myData);this.sucsses(myData)},
    err=>alert(err.message));
 
  }
  sucsses(myData)
  {
 if(myData!= null )
 {
 this.UsersServer.pop('close','popLogin')
 }
}
  
}

