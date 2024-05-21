import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../services/users-server.service';
import { Router } from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';
@Component({
  selector: 'app-home-buttons',
  templateUrl: './home-buttons.component.html',
  styleUrls: ['./home-buttons.component.css']
})
export class HomeButtonsComponent implements OnInit {

  
  location: any;
  constructor(private UsersServer:UsersServerService,private router:Router) { }
popLogin(status:string){
  this.UsersServer.pop(status,'popLogin')
  }
popRegister(status:string){
  this.UsersServer.pop(status,'popRegister')
  }

  renting(){
    this.router.navigate(['Renting']);
  }
  ordering(){
    this.router.navigate(['Ordering']);
  }
  managing(){
    this.router.navigate(['Managing']);
  } 
  
  openNewGroup(){
    this.router.navigate(['OpenNewGroup']);
  }
   ngOnInit() {
    
   }
}


