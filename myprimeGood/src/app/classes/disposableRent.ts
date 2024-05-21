import { IRent } from "./IRent";
import { Time } from "src/app/classes/Time";

export class disposableRent implements IRent{
        public rentID:number
        public carID:number
        public gas:boolean
        public location:string
        public state:number
        public dateFrom:Date
        public dateTo:Date
        public hourFrom:string;
        public hourTo:string;
        public minPercentageForRent:number

        constructor(){
        }
}

