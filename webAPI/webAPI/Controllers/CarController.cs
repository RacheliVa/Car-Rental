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
    public class CarController : ApiController
    {

        //קבלת רכבים לפי קוד משתמש
        [Route("api/cars/getCarsByUserId/{userId}")]
        public IHttpActionResult Get(int userId)
        {
            return Ok(carsBll.getCarsByUserId(userId));
        }
        //קבלת רכב לפי קוד רכב 
        [Route("api/cars/getCarByCarID/{carID}")]
        public IHttpActionResult Geta(int carID)
        {
            return Ok(carsBll.getCarByCarID(carID));
        }
        [Route("api/cars/deleteCar/{userId}")]
        public IHttpActionResult DELETE(int userId)
        {
            return Ok(carsBll.deleteCarForUser(userId));
        }
        [Route("api/cars/Updatear")]
        public IHttpActionResult PUT(Cars carForUpdate)
        {
            return Ok(carsBll.updateCar(carForUpdate));
        }
        [Route("api/cars/addCar")]
        public IHttpActionResult POST(Cars car)
        {
            return Ok(carsBll.addCarForUser(car));
        }

    }
}
