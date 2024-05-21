using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOcars.models;
using dal;
using System.Data.Entity.Migrations;
namespace bll.models
{
    public class groupsBll
    {
        //הוספה
        public static List<groupDTO> addGroup(Groups group)
        {
            staticDB.DataBase.Groups.Add(group);
            staticDB.DataBase.SaveChanges();
            return groupDTO.convertGroupDBToDTO(staticDB.DataBase.Groups.ToList());
        }


        //מחיקת קבוצה.
        public static List<groupDTO> deleteGroup(int id)
        {
            staticDB.DataBase.Groups.Remove(staticDB.DataBase.Groups.Find(id));
            staticDB.DataBase.SaveChanges();
            return groupDTO.convertGroupDBToDTO(staticDB.DataBase.Groups.ToList());
        }


        //עדכון קבוצה
        public static List<groupDTO> updateGroup(Groups group)
        {
            staticDB.DataBase.Set<Groups>().AddOrUpdate(group);
            //staticDB.DataBase.Entry(group).State = System.Data.Entity.EntityState.Modified;
            staticDB.DataBase.SaveChanges();
            return groupDTO.convertGroupDBToDTO(staticDB.DataBase.Groups.ToList());
        }

        //	קבלת פרטי קבוצה/ות לפי קוד מנהל
        public static List<groupDTO> getGroupByManagerID(int id)
        {
           List< Groups> group = staticDB.DataBase.Groups.Where(g => g.groupManagerID == id).ToList();
            return groupDTO.convertGroupDBToDTO(group);

        }
    }
}
