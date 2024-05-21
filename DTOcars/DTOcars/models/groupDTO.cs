using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
    public class groupDTO
    {
        public int groupID { get; set; }
        public string groupName { get; set; }
        public Nullable<int> groupManagerID { get; set; }
        public Nullable<int> maxPriceForHour { get; set; }
        public static groupDTO convertGroupDBToDTO(dal.Groups g)
        {
            var group = new groupDTO
            {
                groupID=g.groupID,
                groupName=g.groupName,
                groupManagerID=g.groupManagerID,
                maxPriceForHour=g.maxPriceForHour

            };
            return group;
        }
        public static List<groupDTO> convertGroupDBToDTO(List<dal.Groups> gList)
        {
            var groups = from g in gList
                         select new groupDTO
                       {
                           groupID = g.groupID,
                           groupName = g.groupName,
                           groupManagerID = g.groupManagerID,
                           maxPriceForHour = g.maxPriceForHour

                       };
            return groups.ToList();
        }

    }
}
