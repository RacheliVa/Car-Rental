import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../services/users-server.service';
import { Router } from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private UsersServer:UsersServerService) { }
    images: any[];
   
    ngOnInit() {
        this.images = [];
        this.images.push({source:'assets/pictures/1.png', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'assets/pictures/2.png', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'assets/pictures/3.png', alt:'Description for Image 3', title:'Title 3'});
        this.images.push({source:'assets/pictures/4.png', alt:'Description for Image 4', title:'Title 4'});
        this.images.push({source:'assets/pictures/5.png', alt:'Description for Image 5', title:'Title 5'});
        this.images.push({source:'assets/pictures/6.png', alt:'Description for Image 6', title:'Title 6'});
        this.images.push({source:'assets/pictures/7.png', alt:'Description for Image 7', title:'Title 7'});
        this.images.push({source:'assets/pictures/8.png', alt:'Description for Image 8', title:'Title 8'});
        this.images.push({source:'assets/pictures/9.png', alt:'Description for Image 9', title:'Title 9'});
        this.images.push({source:'assets/pictures/10.png', alt:'Description for Image 10', title:'Title 10'});
        this.images.push({source:'assets/pictures/11.png', alt:'Description for Image 11', title:'Title 11'});
        this.images.push({source:'assets/pictures/12.png', alt:'Description for Image 12', title:'Title 12'});
    }

    popLogin(status:string){
        this.UsersServer.pop(status,'popLogin')
        }
      popRegister(status:string){
        this.UsersServer.pop(status,'popRegister')
       
        }
       
}


