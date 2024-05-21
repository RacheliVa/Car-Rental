import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from '../classes/car';
import { HttpClient} from '@angular/common/http';
import { UsersServerService } from './users-server.service';
@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  constructor(private http:HttpClient) { }
  BASIC_URL = "http://localhost:50347/";
  userCars:Array<car>;
  isCreateCar:boolean=false;
  getCarsByUserId(id:number):Observable<Array<car>>
  {
    return this.http.get<Array<car>>(this.BASIC_URL + "api/cars/getCarsByUserId/"+id);
  }
  deleteCar(id:number):Observable<Array<car>>
  {
    return this.http.delete<Array<car>>(this.BASIC_URL + "api/cars/deleteCar/"+id);
  }
  updateCar(car:car):Observable<Array<car>>
  {
    return this.http.put<Array<car>>(this.BASIC_URL + "api/cars/Updatear",car);
  }
  addCar(car:car):Observable<Array<car>>
  {
    return this.http.post<Array<car>>(this.BASIC_URL + "api/cars/addCar",car);
  }
  getCarsByCarId(id:number):Observable<car>
  {
    return this.http.get<car>(this.BASIC_URL + "api/cars/getCarByCarID/"+id);
  }
}
