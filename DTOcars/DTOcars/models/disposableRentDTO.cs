using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
    public class disposableRentDTO:IRent
    {
        public int rentID { get; set; }
        public Nullable<int> carID { get; set; }
        public Nullable<bool> gas { get; set; }
        public string location { get; set; }
        public Nullable<int> state { get; set; }
        public Nullable<System.DateTime> dateFrom { get; set; }
        public Nullable<System.DateTime> dateTo { get; set; }
        public string hourFrom { get; set; }
        public string hourTo { get; set; }
        public Nullable<int> minPercentageForRent { get; set; }

        public static List<disposableRentDTO> convertdisposableRentDBToDTO(List<dal.disposableRent> rentList)
        {
            var rents = from r in rentList
                        select new disposableRentDTO
                        {
                            rentID = r.rentID,
                            carID = r.carID,
                            location = r.location,
                            state = r.state,
                            hourFrom = r.hourFrom,
                            hourTo = r.hourTo,
                            dateFrom = r.dateFrom,
                            dateTo=r.dateTo,
                            minPercentageForRent=r.minPercentageForRent
                        };
            return rents.ToList();
        }
        public static disposableRentDTO convertdisposableRentDBToDTO(dal.disposableRent r)
        {
            var rent = new disposableRentDTO
                        {
                            rentID = r.rentID,
                            carID = r.carID,
                            location = r.location,
                            state = r.state,
                            hourFrom = r.hourFrom,
                            hourTo = r.hourTo,
                            dateFrom = r.dateFrom,
                            dateTo = r.dateTo,
                            minPercentageForRent = r.minPercentageForRent
                        };
            return rent;
        }
    }
}
