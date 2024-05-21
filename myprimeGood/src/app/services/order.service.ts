import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { order} from '../classes/order';
import { car } from '../classes/car';
import { IRent } from '../classes/IRent';
import { constantRent } from '../classes/constantRent';
import { disposableRent } from '../classes/disposableRent';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  BASIC_URL = "http://localhost:50347/";
  order:order
  cuurentRent:IRent
  userOrders:Array<order>
  rents:Array<IRent>
   constantRents:Array<constantRent>=new Array<constantRent>()
   disposableRents:Array<disposableRent>=new Array<disposableRent>()
  searchOrAdd(order:order):Observable<Array<IRent>>
  {
    console.log(order)
    return this.http.post<Array<IRent>>(this.BASIC_URL+"api/orders/search",order)
  }
  addOrder():Observable<Array<order>>
  { 
    
    this.order.rentID=this.cuurentRent.rentID
    console.log(this.order)
    return this.http.post<Array<order>>(this.BASIC_URL+"api/orders/addOrder",this.order)
  }
  getOrdersByUserId(id:number):Observable<Array<order>>
  {
    return this.http.get<Array<order>>(this.BASIC_URL + "api/orders/getOrdersByUserID/"+id);
  }
  rentsListsDevider(){
    if(this.constantRents.length==0&&this.disposableRents.length==0)
     this.rents.forEach(r => { if (r instanceof disposableRent) this.disposableRents.push(r as disposableRent);
       else this.constantRents.push(r as constantRent);
     });
   }
   clearRentsLists(){
     this.rents=new Array<IRent>()
     this.disposableRents=new Array<disposableRent>()
     this.constantRents=new Array<constantRent>()
   }
}
