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
    public class RentController : ApiController
    {
        [Route("api/rents/addDisposableRent")]
        public IHttpActionResult POST(disposableRent rent)
        {
            return Ok(rentBll.addDisposableRent(rent));
        }
        [Route("api/rents/addConstantRent")]
        public IHttpActionResult POST(constantRent rent)
        {
            return Ok(rentBll.addConstantRent(rent));
        }
        [Route("api/rents/getRentsByCarID/{carID}")]
        public IHttpActionResult GET(int carID)
        {
            return Ok(rentBll.getRentsByCarID(carID));
        }
    }
}
