using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
    public class orderDTO
    {
        public int orderID { get; set; }
        public Nullable<int> userID { get; set; }
        public Nullable<System.DateTime> startDate { get; set; }
        public Nullable<System.DateTime> endDate { get; set; }
        public string startHour { get; set; }
        public string endHour { get; set; }
        public Nullable<int> numseats { get; set; }
        public Nullable<int> numHours { get; set; }
        public Nullable<int> rentID { get; set; }
        public static List<orderDTO> convertOrdersDBToDTO(List<dal.Orders> orderList)
        {
            var orders = from o in orderList
                         select new orderDTO
                        {
                            orderID=o.orderID,
                            userID=o.userID,
                            startDate=o.startDate,
                            endDate=o.endDate,
                            startHour=o.startHour,
                            endHour=o.endHour,
                            numseats=o.numseats,
                            numHours=o.numHours,
                            rentID=o.rentID
                        };
            return orders.ToList();
        }
        public static orderDTO convertOrdersDBToDTO(dal.Orders o)
        {
            var order = new orderDTO
            {
                orderID = o.orderID,
                userID = o.userID,
                startDate = o.startDate,
                endDate = o.endDate,
                startHour = o.startHour,
                endHour = o.endHour,
                numseats = o.numseats,
                numHours = o.numHours,
                rentID = o.rentID
            };
            return order;
        }
    }
}
