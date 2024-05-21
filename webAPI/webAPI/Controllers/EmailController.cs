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
    public class EmailController : ApiController
    {

        //	שליחת מייל
        [Route("api/emails/send/{contactAddress}/{subject}/{body}")]
        public IHttpActionResult Get(string contactAddress, string subject, string body)
        {

            return Ok(Email.SendEmail(contactAddress, subject, body));
        }
    }
}
