import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IRent } from '../classes/IRent';
import { disposableRent } from '../classes/disposableRent';
import { constantRent } from '../classes/constantRent';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http:HttpClient) { }

  BASIC_URL = "http://localhost:50347/";
  addRent(rent:IRent):Observable<IRent>
  {
    if(rent instanceof  disposableRent)
    {
    const dis =rent as disposableRent
    console.log(dis);
    return this.http.post<disposableRent>(this.BASIC_URL+"api/rents/addDisposableRent",dis);
    }
    else
    {
      const constant=rent as constantRent;
      console.log(constant);
    return this.http.post<constantRent>(this.BASIC_URL+"api/rents/addConstantRent",constant);
    }
  }


  getRentsByCarID(carId:number):Observable<Array<IRent>>
  {
    return this.http.get<Array<IRent>>(this.BASIC_URL + "api/rents/getRentsByCarID/"+carId);
  }
}
