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
    public class RequestController : ApiController
    {
        //הוספת בקשה
        [Route("api/Request/Register")]
        public IHttpActionResult Post(LoginRequests loginRequests)
        {
            return Ok(requestsBll.addRequest(loginRequests));
        }
        //קבלת הבקשות לפי קוד קבוצה
        [Route("api/Request/getRequestsBygroupID/{groupID}")]
        public IHttpActionResult GET(int groupID)
        {
            return Ok(requestsBll.getRequestsByGroupID(groupID));
        }
        //מחיקת בקשה
        [Route("api/Request/deleteRequest/{requestID}")]
        public IHttpActionResult DELETE(int requestID)
        {
            return Ok(requestsBll.deleteRequest(requestID));
        }

    }
}
