using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bll.models;
namespace webAPI.Controllers
{
    public class UserController : ApiController
    {
        //	בדיקה האם קיים משתמש לפי שם משתמש וסיסמא
        [Route("api2/users/login/{userName}/{password}")]
        public IHttpActionResult Get(string userName,string password)
        {
            return Ok(usersBll.findUser(userName,password));
        }

       
    }
}
