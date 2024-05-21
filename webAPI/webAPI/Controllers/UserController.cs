using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bll.models;
using dal;

namespace webAPI.Controllers
{
    public class UserController : ApiController
    {
        //	בדיקה האם קיים משתמש לפי שם משתמש וסיסמא
        [Route("api/users/login/{userName}/{password}")]
        public IHttpActionResult Get(string userName,string password)
        {
            //Email.SendEmail("5711426li@gmail.com", "WE CAN DO THAT!!", "it's amazing!!");
            return Ok(usersBll.findUser(userName,password));
        }

        //קבלת משתמשים לפי קוד קבוצה
        [Route("api/users/getUsersByGroupID/{groupId}")]
        public IHttpActionResult Get(int groupId)
        {
            return Ok(usersBll.getUsersByGroupID(groupId));
        }
        //מחיקת משתמש
        [Route("api/users/deleteUser/{userId}/{groupId}")]
        public IHttpActionResult DELETE(int userId, int groupId)
        {
            return Ok(usersBll.deleteUser(userId, groupId));
        }
       
        //הוספת משתמש מתוך בקשה
        [Route("api/users/addUser")]
        public IHttpActionResult POST(LoginRequests request)
        {
            return Ok(usersBll.addUser(request));
        }
        //הוספת משתמש - מנהל
        [Route("api/users/addAdministratorUser")]
        public IHttpActionResult POST(Users user)
        {
            return Ok(usersBll.addUser(user));
        }
        //עדכון משתמש
        [Route("api/users/updateUser")]
        public IHttpActionResult PUT(Users userForUpdate)
        {
            return Ok(usersBll.updateUser(userForUpdate));
        }

        ////שליחת מייל
        //[Route("api/users/sendEmail")]
        //public void PUT()
        //{
        //    Email.SendEmail("racheli.litman@gmail.com","WE CAN DO THAT!!","it's amazing!!");
        //}

    }
}
