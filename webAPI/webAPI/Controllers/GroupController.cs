using bll.models;
using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace webAPI.Controllers
{
    public class GroupController : ApiController
    {
        //קבלת פרטי קבוצה/ות לפי קוד מנהל
        [Route("api/groups/getGroupByManagerID/{managerId}")]
        public IHttpActionResult Get(int managerId)
        {
            return Ok(groupsBll.getGroupByManagerID(managerId));
        }
        //עדכון פרטי קבוצה
        [Route("api/groups/UpdateGroup")]
        public IHttpActionResult PUT(Groups groupForUpdate)
        {
            return Ok(groupsBll.updateGroup(groupForUpdate));
        }
        //מחיקת קבוצה
        [Route("api/groups/deleteGroup/{GroupId}")]
        public IHttpActionResult DELETE(int GroupId)
        {
            return Ok(groupsBll.deleteGroup(GroupId));
        }

        //הוספת קבוצה
        [Route("api/groups/addGroup")]
        public IHttpActionResult POST(Groups group)
        {
            return Ok(groupsBll.addGroup(group));
        }
    }
}
