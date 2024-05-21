import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { request} from '../classes/request';
import { Observable } from 'rxjs';
import { user } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http:HttpClient) { }
  BASIC_URL = "http://localhost:50347/";

  register(request:request):Observable<request>
  {
    return this.http.post<request>(this.BASIC_URL+"api/Request/Register",request);
  }
  getRequestsBygroupID(groupID:number):Observable<Array<request>>
  {
    return this.http.get<Array<request>>(this.BASIC_URL+"api/Request/getRequestsBygroupID/"+groupID);
  }
  deleteRequest(requestID:number):Observable<Array<request>>
  {
    return this.http.delete<Array<request>>(this.BASIC_URL + "api/Request/deleteRequest/"+requestID);
  }
  addUserFromRequest(request:request):Observable<Array<user>>
  {
    return this.http.post<Array<user>>(this.BASIC_URL+"api/users/addUser",request);
  }
}
