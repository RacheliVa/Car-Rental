import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { group } from '../classes/group';
import { user } from '../classes/user';
import { request } from '../classes/request';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }
  BASIC_URL = "http://localhost:50347/";
  groups:group[];
  currentGroup:group;
  groupUsers:Array<user>=new Array<user>();
  groupRequests:Array<request>=new Array<request>();
  getGroupByManagerID(managerId:number):Observable<Array<group>>
  {
    return this.http.get<Array<group>>(this.BASIC_URL + "api/groups/getGroupByManagerID/"+managerId);
  }
  updateGroup(group:group):Observable<Array<group>>
  {
    return this.http.put<Array<group>>(this.BASIC_URL + "api/groups/UpdateGroup",group);
  }
  deleteGroup(id:number):Observable<Array<group>>
  {
    return this.http.delete<Array<group>>(this.BASIC_URL + "api/groups/deleteGroup/"+id);
  }
  openGroup(group:group):Observable<Array<group>>
  {
    return this.http.post<Array<group>>(this.BASIC_URL + "api/groups/addGroup",group);
  }
}
