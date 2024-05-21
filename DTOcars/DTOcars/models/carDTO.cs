using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
   public class carDTO
    {
        public int carID { get; set; }
        public Nullable<int> onerID { get; set; }
        public Nullable<int> yearProduce { get; set; }
        public string model { get; set; }
        public Nullable<int> numSeats { get; set; }
        public Nullable<bool> babySeat { get; set; }
        public Nullable<int> priceForHour { get; set; }
        public string discription { get; set; }
        //רכב נכה
        public Nullable<bool> handicappedCar { get; set; }
        public static carDTO convertCarDBToDTO(dal.Cars c) {
            var car = new carDTO
            {
                carID = c.carID,
               onerID=c.onerID,
               yearProduce=c.yearProduce,
               model=c.model,
               numSeats=c.numSeats,
               babySeat=c.babySeat,
               priceForHour=c.priceForHour,
               discription=c.discription,
               handicappedCar=c.handicappedCar
    
            };
            return car;
        }
        public static List<carDTO> convertCarDBToDTO(List<dal.Cars> cList)
        {
            var cars = from c in cList
                       select new carDTO
                       {
                carID = c.carID,
                onerID = c.onerID,
                yearProduce = c.yearProduce,
                model = c.model,
                numSeats = c.numSeats,
                babySeat = c.babySeat,
                priceForHour = c.priceForHour,
                discription = c.discription,
                handicappedCar = c.handicappedCar
            };
            return cars.ToList();
        }
    }
}
