import { Component, OnInit } from '@angular/core';
import { UsersServerService } from '../../services/users-server.service';
import { user } from '../../classes/user';
import { GroupsService } from '../../services/groups.service';
import { group } from '../../classes/group';

@Component({
  selector: 'app-managing',
  templateUrl: './managing.component.html',
  styleUrls: ['./managing.component.css']
})
export class ManagingComponent implements OnInit {
  constructor(private UsersServer:UsersServerService,private GroupsService:GroupsService) { }

  cuurentManager:user;
  showOneGroup:boolean=false
  showGroupsButtons:boolean=false
  currentGroup:group
  showCurrentGroup:boolean=false
    ngOnInit() {
      this.getGroupByManagerID();
     
    }
   
    getGroupByManagerID( )
    {
      this.GroupsService.getGroupByManagerID(this.UsersServer.currentUser.userID).subscribe(
        myData=>{this.GroupsService.groups=myData;this.isMoreGroups(); console.log(myData);},
      err=>alert(err.message));
   
    }
  isMoreGroups(){
    if(this.GroupsService.groups.length>1)
    this.showGroupsButtons=true
   else this.showOneGroup=true
  }
  showGroup(g){
      this.currentGroup=g
      this.showCurrentGroup=!this.showCurrentGroup
  }
}