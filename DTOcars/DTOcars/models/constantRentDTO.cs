using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
    public class constantRentDTO:IRent
    {
        public int rentID { get; set; }
        public Nullable<int> carID { get; set; }
        public string location { get; set; }
        public Nullable<int> state { get; set; }
        public string hourFrom { get; set; }
        public string hourTo { get; set; }
        public Nullable<int> daysID { get; set; }

        public static List<constantRentDTO> convertConstantRentDBToDTO(List<dal.constantRent> rentList)
        {
            var rents = from r in rentList
                        select new constantRentDTO
                        {
                            rentID = r.rentID,
                            carID = r.carID,
                            location = r.location,
                            state = r.state,
                            hourFrom = r.hourFrom,
                            hourTo = r.hourTo,
                            daysID = r.daysID
                        };
            return rents.ToList();
        }
        public static constantRentDTO convertConstantRentDBToDTO(dal.constantRent r)
        {
            var rent =   new constantRentDTO
                        {
                            rentID = r.rentID,
                            carID = r.carID,
                            location = r.location,
                            state = r.state,
                            hourFrom = r.hourFrom,
                            hourTo = r.hourTo,
                            daysID = r.daysID
                        };
            return rent;
        }
    }
}
