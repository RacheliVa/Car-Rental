using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
 public   interface IRent
    {
         int rentID { get; set; }
         Nullable<int> carID { get; set; }
         string location { get; set; }
         Nullable<int> state { get; set; }
    }
}
