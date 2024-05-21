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
    public class OrderController : ApiController
    {
    
        [Route("api/orders/search")]
        public IHttpActionResult POST(Orders order)
        {
            return Ok(ordersBll.Search(order));
        }
        [Route("api/orders/addOrder")]
        public IHttpActionResult POSTa(Orders order)
        {
            return Ok(ordersBll.addOrder(order));
        }

        [Route("api/orders/getOrdersByUserID/{userID}")]
        public IHttpActionResult GET(int userID)
        {
            return Ok(ordersBll.getOrdersByUserID(userID));
        }

    }
}
