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
    public class usersBll {
        //הוספת משתמש רגיל - למנהל...
        public static List<userDTO> addUser(Users User)
        {
            staticDB.DataBase.Users.Add(User);
            staticDB.DataBase.SaveChanges();
            return userDTO.convertUsersDBToDTO(staticDB.DataBase.Users.ToList());
        }
        //	בדיקה האם קיים משתמש לפי שם משתמש וסיסמא
        public static userDTO findUser(string name, string password)
        {
            if (staticDB.DataBase.Users.FirstOrDefault(u => u.userName == name && u.password == password) != null)
            return userDTO.convertUsersDBToDTO(staticDB.DataBase.Users.First(u => u.userName == name && u.password == password)); 
            return null;
        }



        //רשימת משתמשים לפי קבוצה
        public static List<userDTO> getUsersByGroupID(int groupID)
        {
            int i/*, j,id*/;
             // של המשתמשים בקבוצה המבוקשת id רשימת ה
            List<int?> usersIDs = staticDB.DataBase.groupAtribution.Where(u => u.groupID == groupID).Select(u =>u.userID).ToList();
            // id כל משתמש- בדוק האם הוא קיים ברשימת ה 
            //List<Users> users = staticDB.DataBase.Users.Where(u => usersIDs.Where(g => g == u.userID)!=null).ToList();
            List<userDTO> users = new List<userDTO>();
            List<userDTO> allUsers = userDTO.convertUsersDBToDTO(staticDB.DataBase.Users.ToList());
            var len = staticDB.DataBase.Users.Count();
            for (i=0;i<len ; i++)
                if (usersIDs.Contains(allUsers.ElementAt(i).userID))
                     users.Add(allUsers.ElementAt(i));
            return users;
         }


        //	הוספת משתמש לפי בקשה!!!! והוספה לרשימת שיוך קבוצה
        public static List<userDTO> addUser(LoginRequests loginRequest)
        {
            //חיפוש האם המשתמש כבר קיים
            var User = findUser(loginRequest.userName, loginRequest.password);
            //אם הוא לא קיים
            if (User == null) {

            //יצירת משתמש חדש עפ"י פרטי הבקשה
            Users newUser = new Users
            {
                userName = loginRequest.userName,
                firstName = loginRequest.firstName,
                lastName = loginRequest.lastName,
                phoneNumber = loginRequest.phoneNumber,
                email = loginRequest.email,
                password = loginRequest.password
            };
            
            //הוספת המשתמש
            staticDB.DataBase.Users.Add(newUser);
            staticDB.DataBase.SaveChanges();

            //מציאת קוד משתמש שהוסף ע"י שימוש בפונקציה שיצרנו
            User= findUser(loginRequest.userName, loginRequest.password);
             }

            //מציאת קוד קבוצה אליה רוצים להצטרף
            var GroupID = staticDB.DataBase.Groups.Where(g => g.groupName == loginRequest.groupName).Select(g => g.groupID).ToList();
            
            //הוספת השיוך
            groupAtribution newAtribution = new groupAtribution { groupID = GroupID.First() ,userID= User.userID};
            staticDB.DataBase.groupAtribution.Add(newAtribution);
            staticDB.DataBase.SaveChanges();

            //מחיקת הבקשה מטבלת בקשות
          

            requestsBll.deleteRequest(loginRequest.requestID);

            // החזרת המשתמשים של הקבוצה אליה התוסף המשתמש ע"י שימוש בפונקציה שיצרנו
            return getUsersByGroupID(GroupID.First());
        }


        //מחיקת משתמש.
        public static List<userDTO> deleteUser(int userId, int groupId)
        {
            staticDB.DataBase.groupAtribution.Remove(staticDB.DataBase.groupAtribution.First(x => x.userID == userId && x.groupID == groupId));
            staticDB.DataBase.SaveChanges();
            return getUsersByGroupID(groupId);
        }


        //עדכון משתמש
        public static List<userDTO> updateUser(Users user)
        {
            staticDB.DataBase.Set<Users>().AddOrUpdate(user);
            //staticDB.DataBase.Entry(user).State = System.Data.Entity.EntityState.Modified;
            staticDB.DataBase.SaveChanges();
            return userDTO.convertUsersDBToDTO(staticDB.DataBase.Users.ToList());
        }

        //	רשימת משתמשים לפי רשימת קבוצות עם סימון של לא מורשים.
        public static List<userDTO> getUsersByGroupsID(List<int> groupsID)
        {
            List<userDTO> usersList = new List<userDTO>();
            groupsID.ForEach(g => usersList.AddRange(getUsersByGroupID(g)));
            return usersList.ToList();
        }
    }
}
