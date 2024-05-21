import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../services/users-server.service';
import { RequestService } from '../../services/request.service';
import { request } from '../../classes/request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private requestService:RequestService,private UsersServer:UsersServerService) { }

  ngOnInit() {
  }
  currentRequest=new request();
  
  register()
  {
  this.requestService.register(this.currentRequest).subscribe(
    myData=>{console.log(myData), document.getElementById('answer').style.display='block'},
    err=>{}
  
  );
  }
  cancle(){
    this.UsersServer.pop('close','popRegister')
    document.getElementById('answer').style.display='none'
  }

}
