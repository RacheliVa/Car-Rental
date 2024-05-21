using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTOcars.models;
using dal;
namespace bll.models
{
    public class requestsBll
    {

        //	קבלת בקשות לפי קוד קבוצה
        public static List<loginRequestDTO> getRequestsByGroupID(int id)
        {
            //מציאת שם הקבוצה המבוקשת
            string GroupName = staticDB.DataBase.Groups.Find(id).groupName;
            //מציאת הבקשות להצטרפות לקבוצה זו
            List<LoginRequests> requests =staticDB.DataBase.LoginRequests.Where(l => l.groupName == GroupName).ToList();
            return loginRequestDTO.convertLoginRequestDBToDTO(requests);
        }


        //מחיקת בקשה
        public static List<loginRequestDTO> deleteRequest(int id)
        {
            var request = staticDB.DataBase.LoginRequests.Find(id);
            var GroupID = staticDB.DataBase.Groups.Where(g => g.groupName == request.groupName).Select(g => g.groupID).ToList();
            staticDB.DataBase.LoginRequests.Remove(staticDB.DataBase.LoginRequests.Find(id));
            staticDB.DataBase.SaveChanges();
            return getRequestsByGroupID(GroupID.First());
        }


        //הוספת בקשה
        public static List<loginRequestDTO> addRequest(LoginRequests request)
        {
            staticDB.DataBase.LoginRequests.Add(request);
            staticDB.DataBase.SaveChanges();
            return loginRequestDTO.convertLoginRequestDBToDTO(staticDB.DataBase.LoginRequests.ToList());
        }

    }
}
