import { Component } from '@angular/core';
import { car } from './classes/car';
import { order } from './classes/order';
import { Time } from '@angular/common';
import { user } from './classes/user';
import { request } from './classes/request';
import { disposableRent } from './classes/disposableRent';
import { constantRent } from './classes/constantRent';
import { UsersServerService } from './services/users-server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private UsersServer:UsersServerService) { }
  
  title = 'app';
  popLogin(status:string){
    this.UsersServer.pop(status,'popLogin')
    }
  popRegister(status:string){
    this.UsersServer.pop(status,'popRegister')
   
    }
    

  ngOnInit(){
  
   
  
  }

}
