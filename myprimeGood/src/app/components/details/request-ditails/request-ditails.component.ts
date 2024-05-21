import { Component, OnInit ,Input} from '@angular/core';
import { request } from '../../../classes/request';
import { RequestService } from '../../../services/request.service';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'app-request-ditails',
  templateUrl: './request-ditails.component.html',
  styleUrls: ['./request-ditails.component.css']
})
export class RequestDitailsComponent implements OnInit {

  @Input() request:request;
  constructor(private requestService:RequestService,private groupsService:GroupsService) { }

  ngOnInit() {
  }
  comitUser(){
    this.requestService.addUserFromRequest(this.request).subscribe(
      myData=>{this.groupsService.groupUsers=myData;this.getRequestsByGroupID();console.log(myData);},
      err=>alert(err.message));
 }
 cancleComitUser(){
   this.requestService.deleteRequest(this.request.requestID).subscribe(
     myData=>{this.groupsService.groupRequests=myData;console.log(myData);},
     err=>alert(err.message));
 }
 getRequestsByGroupID()
  {
    this.requestService.getRequestsBygroupID(this.groupsService.currentGroup.groupID).subscribe(
      myData=>{this.groupsService.groupRequests=myData;console.log(myData);},
    err=>alert(err.message));
  }

}
