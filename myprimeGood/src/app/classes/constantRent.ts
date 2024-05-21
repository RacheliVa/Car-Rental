import { IRent } from "./IRent";
import { Time } from "@angular/common";

export class constantRent implements IRent{
    public rentID:number
    public carID:number
    public location:string
    public state:number
    public hourFrom:string
    public hourTo:string
    public daysID:number

    constructor(){}
}