import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServerService implements OnInit{

  ngOnInit(){
  }
  constructor(private http:HttpClient) { }
  BASIC_URL = "http://localhost:50347/";
  currentUser:user;
  popLogin:string;
  login(username:string,password:string):Observable<user>
  {
    return this.http.get<user>(this.BASIC_URL + "api/users/login/"+username+"/"+password);
  }
  pop(status:string,elementId:string){
    if(status=="open")
    document.getElementById(elementId).style.display='block'
    else
    document.getElementById(elementId).style.display='none'
    }

  getUsersByGroupID(groupId:number):Observable<Array<user>>
    {
      return this.http.get<Array<user>>(this.BASIC_URL + "api/users/getUsersByGroupID/"+groupId);
    }
    deleteUser(userID:number,groupID:number):Observable<Array<user>>
    {
      return this.http.delete<Array<user>>(this.BASIC_URL + "api/users/deleteUser/"+userID+"/"+groupID);
    }
    addUser(user:user):Observable<Array<user>>
    {
      return this.http.post<Array<user>>(this.BASIC_URL+"api/users/addAdministratorUser",user)
    }
    updateUser(user:user):Observable<Array<user>>
    {
      return this.http.put<Array<user>>(this.BASIC_URL + "api/users/updateUser",user);
    }

}
