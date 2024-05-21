using dal;
using DTOcars.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll.models
{
   public class rentBll
    {
        //	רשימת השכרות לפי רכב
        public static List<IRent> getRentsByCarID(int carId)
        {
            List<constantRent> constantRents = staticDB.DataBase.constantRent.Where(d => d.carID == carId).ToList();
            List<disposableRent> disposableRents = staticDB.DataBase.disposableRent.Where(d => d.carID == carId).ToList();
            List<IRent> Rents=new List<IRent>();
            Rents.AddRange(disposableRentDTO.convertdisposableRentDBToDTO(disposableRents));
            Rents.AddRange(constantRentDTO.convertConstantRentDBToDTO(constantRents));
            return Rents;
        }

        //הוספת השכרה קבועה

        public static List<constantRentDTO> addConstantRent(constantRent Rent)
        {
            Rent.Cars = null;
            staticDB.DataBase.constantRent.Add(Rent);
            staticDB.DataBase.SaveChanges();
            return constantRentDTO.convertConstantRentDBToDTO(staticDB.DataBase.constantRent.ToList());
        }
      //עדכון השכרה קבועה
        public static List<constantRentDTO> updateConstantRent(constantRent rent)
        {
            staticDB.DataBase.Entry(rent).State = System.Data.Entity.EntityState.Modified;
            staticDB.DataBase.SaveChanges();
            return constantRentDTO.convertConstantRentDBToDTO(staticDB.DataBase.constantRent.ToList());
        }

        //הוספת השכרה חד פעמית
        public static List<disposableRentDTO> addDisposableRent(disposableRent Rent)
        {
            staticDB.DataBase.disposableRent.Add(Rent);
            staticDB.DataBase.SaveChanges();
            return disposableRentDTO.convertdisposableRentDBToDTO(staticDB.DataBase.disposableRent.ToList());
        }
        //עדכון השכרה חד פעמית
        public static List<disposableRentDTO> updateDisposableRent(disposableRent rent)
        {
            staticDB.DataBase.Entry(rent).State = System.Data.Entity.EntityState.Modified;
            staticDB.DataBase.SaveChanges();
            return disposableRentDTO.convertdisposableRentDBToDTO(staticDB.DataBase.disposableRent.ToList());
        }

        //(אין מחיקה כי נמחק לפי תאריך)

    }
}
