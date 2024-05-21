using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using dal;
using DTOcars.models;

namespace bll.models
{
    public class carsBll
    {
        //	רשימת רכבים עם פרטים לפי קוד משתמש
        public static List<carDTO> getCarsByUserId(int id)
        {
            var cars = staticDB.DataBase.Cars.Where(c => c.onerID == id).ToList();
            return carDTO.convertCarDBToDTO(cars);
        }

        //	רכב לפי קוד רכב
        public static carDTO getCarByCarID(int id)
        {
            var car = staticDB.DataBase.Cars.Find(id);
            return carDTO.convertCarDBToDTO(car);
        }

        // הוספת רכב והחזרת כל הרכבים הקיימים
        //אם נצטרך במהלך הפרוייקט למחוק לא מתוך משתמש מסוים  
        public static List<carDTO> addCar(Cars car)
        {
            staticDB.DataBase.Cars.Add(car);
            staticDB.DataBase.SaveChanges();
            return carDTO.convertCarDBToDTO(staticDB.DataBase.Cars.ToList());
        }

        // הוספת רכב והחזרת כל הרכבים הקיימים  
        public static List<carDTO> addCarForUser(Cars car)
        {
            staticDB.DataBase.Cars.Add(car);
            staticDB.DataBase.SaveChanges();
            return getCarsByUserId(car.onerID);
        }
        //שינוי פרטי רכב
        public static List<carDTO> updateCar(Cars car)
        {
            //staticDB.DataBase.Entry(car).State = System.Data.Entity.EntityState.Modified;
            staticDB.DataBase.Cars.Find(car.carID).onerID = car.onerID;
            staticDB.DataBase.Cars.Find(car.carID).yearProduce = car.yearProduce;
            staticDB.DataBase.Cars.Find(car.carID).model = car.model;
            staticDB.DataBase.Cars.Find(car.carID).numSeats = car.numSeats;
            staticDB.DataBase.Cars.Find(car.carID).babySeat = car.babySeat;
            staticDB.DataBase.Cars.Find(car.carID).priceForHour = car.priceForHour;
            staticDB.DataBase.Cars.Find(car.carID).discription = car.discription;
            staticDB.DataBase.Cars.Find(car.carID).handicappedCar = car.handicappedCar;
            staticDB.DataBase.SaveChanges();
            return carDTO.convertCarDBToDTO(staticDB.DataBase.Cars.ToList());
        }

        //מחיקת רכב והחזרת כל הרכבים הקיימים 
        //אם נצטרך במהלך הפרוייקט למחוק לא מתוך משתמש מסוים
        public static List<carDTO> deleteCar(int id)
        {
            staticDB.DataBase.Cars.Remove(staticDB.DataBase.Cars.Find(id));
            staticDB.DataBase.SaveChanges();
            return carDTO.convertCarDBToDTO(staticDB.DataBase.Cars.ToList());
        }

        //מחיקת רכב והחזרת רכבים לפי קוד משתמש
        public static List<carDTO> deleteCarForUser(int id)
        {
            Cars c = staticDB.DataBase.Cars.Find(id);
            staticDB.DataBase.Cars.Remove(c);
            staticDB.DataBase.SaveChanges();
            return getCarsByUserId(c.onerID);
        }
    }
}
