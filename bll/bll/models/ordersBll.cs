using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOcars.models;
using dal;
namespace bll.models
{
    public class ordersBll
    {
        //	מחיקה +סימון ההשכרה כלא תפוסה.
        public static List<orderDTO> deleteOrder(int id)
        {
            //מציאת ההשכרה לפי הקוד
            Orders order = staticDB.DataBase.Orders.Find(id);
            //השכרה קבועה
            if (order.rentID % 2 != 0)
            {
                constantRent rent = staticDB.DataBase.constantRent.Find(order.rentID);
                rent.state = 0;
                staticDB.DataBase.Entry(rent).State = System.Data.Entity.EntityState.Modified;
            }
            else
            {
                disposableRent rent = staticDB.DataBase.disposableRent.Find(order.rentID);
                rent.state = 0;
                staticDB.DataBase.Entry(rent).State = System.Data.Entity.EntityState.Modified;
            }
            staticDB.DataBase.Orders.Remove(staticDB.DataBase.Orders.Find(id));
            staticDB.DataBase.SaveChanges();
          return orderDTO.convertOrdersDBToDTO(staticDB.DataBase.Orders.ToList());
        }

        //קבלת רשימת הזמנות לפי קוד רכב

        public static List<orderDTO> getOrdersByCarID(int carID)
        {
            // של ההשכרות( משני הסוגים) עם קוד הרכב המבוקש id רשימת ה
            List<int> rentsIDs = staticDB.DataBase.disposableRent.Where(r => r.carID == carID).Select(r => r.rentID).ToList();
            rentsIDs.AddRange( staticDB.DataBase.constantRent.Where(r => r.carID == carID).Select(r => r.rentID).ToList());
            // עובר על כל ההזמנות ובודק האם קוד ההשכרה נמצא ברשימה של קודי ההשכרה לרכב
            List<Orders> orders = staticDB.DataBase.Orders.Where(o => rentsIDs.Where(r => r == o.rentID) != null).ToList();
            return orderDTO.convertOrdersDBToDTO(orders);
        }


        //קבלת רשימת הזמנות לפי קוד משתמש

        public static List<orderDTO> getOrdersByUserID(int? userID)
        {
          
            // עובר על כל ההזמנות ובודק האם קוד ההשכרה נמצא ברשימה של קודי ההשכרה לרכב
            List<Orders> orders = staticDB.DataBase.Orders.Where(o => o.userID==userID).ToList();
            return orderDTO.convertOrdersDBToDTO(orders);
        }
        //הוספת הזמנה

        public static List<orderDTO> addOrder(Orders order)
        {
            //הוספת הזמנה
            staticDB.DataBase.Orders.Add(order);
            staticDB.DataBase.SaveChanges();
            //מציאת קוד ההזמנה שנוספה
            int orderID = staticDB.DataBase.Orders.Where(o => o.rentID == order.rentID).Select(o=>o.orderID).First();
            if (order.rentID % 2 == 0)//השכרה חד פעמית 
            { 
                //עידכון המצב בהשכרה המתאימה לקוד ההזמנה
                disposableRent r = staticDB.DataBase.disposableRent.Find(order.rentID);
                r.state = orderID;
                staticDB.DataBase.Entry(r).State = System.Data.Entity.EntityState.Modified;
            }
            else//השכרה קבועה
            {
                constantRent r = staticDB.DataBase.constantRent.Find(order.rentID);
                r.state = orderID;
                staticDB.DataBase.Entry(r).State = System.Data.Entity.EntityState.Modified;
            }

            return getOrdersByUserID(order.userID);
        }

        //פונקציה המדמה את הלוגיקה של מציאת השכרה מתאימה
        public static List<IRent> Search(Orders order)
        {
            //רשימת הקודים של הרכבים של ההשכרות המתאימות

            List<IRent> allRents = new List<IRent>();
           
            allRents.AddRange(disposableRentDTO.convertdisposableRentDBToDTO(staticDB.DataBase.disposableRent.Where(d=>d.state==null|| d.state == 0).ToList()));
            allRents.AddRange(constantRentDTO.convertConstantRentDBToDTO( staticDB.DataBase.constantRent.Where(d => d.state == null|| d.state == 0).ToList()));

            
            
            //החיפוש
            List<IRent> returnRents = new List<IRent>();
            returnRents.Add(allRents.ElementAt(allRents.Count()/4));
            returnRents.Add(allRents.ElementAt(allRents.Count()/2));
            returnRents.Add(allRents.ElementAt(1));

           
            //אם אין השכרות מתאימות שומרים את ההזמנה בטבלת הזמנות
            if (allRents.Count()==0)
            { 
                staticDB.DataBase.Orders.Add(order);
                staticDB.DataBase.SaveChanges();
            }
            return returnRents;
        }
    }
}
