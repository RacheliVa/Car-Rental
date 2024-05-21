import { Component, OnInit, Input } from '@angular/core';
import { UsersServerService } from '../../../services/users-server.service';
import { GroupsService } from '../../../services/groups.service';
import { RequestService } from '../../../services/request.service';
import { group } from '../../../classes/group';
import {ScrollPanelModule} from 'primeng/scrollpanel';
@Component({
  selector: 'app-group-ditails',
  templateUrl: './group-ditails.component.html',
  styleUrls: ['./group-ditails.component.css']
})
export class GroupDitailsComponent implements OnInit {
  @Input() group:group;
  constructor(private UsersServer:UsersServerService,private GroupsService:GroupsService,private requestService:RequestService) { }

  
  UpdateGroup :group;
  isUpdate:boolean=false;
  ngOnInit() {
    this.getUsersByGroupID();
    this.getRequestsByGroupID();
    this.GroupsService.currentGroup=this.group;

    if(this.group)
    { this.UpdateGroup=new group();
      this.UpdateGroup.groupID=this.group.groupID;
      this.UpdateGroup.groupName=this.group.groupName;
      this.UpdateGroup.groupManagerID=this.group.groupManagerID;
      this.UpdateGroup.maxPriceForHour=this.group.maxPriceForHour;
    }
   
    else
    this.UpdateGroup=new group();
  }
  
 
  updateGroupDetails(){
      this.GroupsService.updateGroup(this.UpdateGroup).subscribe(
        myData=>{this.group=this.UpdateGroup;console.log(myData); this.isUpdate=false;},
        err=>alert(err.message));
  }

  deleteGroupById(delGroup:group){
    this.GroupsService.deleteGroup(delGroup.groupID).subscribe(
      myData=>{this.GroupsService.groups=myData},
      err=>alert(err.message));
  } 

  cancleUpdateGroup(){
  console.log("cancleUpdateGroup");
  this.UpdateGroup.groupID=this.group.groupID;
  this.UpdateGroup.groupName=this.group.groupName;
  this.UpdateGroup.groupManagerID=this.group.groupManagerID;
  this.UpdateGroup.maxPriceForHour=this.group.maxPriceForHour;
 
  }
updateOn(){
console.log("isUpdate=true");
  this.isUpdate=true;
}
  getUsersByGroupID()
  {
    this.UsersServer.getUsersByGroupID(this.group.groupID).subscribe(
      myData=>{this.GroupsService.groupUsers=myData;console.log(myData);},
    err=>alert(err.message));
  }
  getRequestsByGroupID()
  {
    this.requestService.getRequestsBygroupID(this.group.groupID).subscribe(
      myData=>{this.GroupsService.groupRequests=myData;console.log(myData);},
    err=>alert(err.message));
  }
}

