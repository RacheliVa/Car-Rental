using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
    public class loginRequestDTO
    {
        public int requestID { get; set; }
        public string userName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string groupName { get; set; }
        public static List<loginRequestDTO> convertLoginRequestDBToDTO(List<dal.LoginRequests> lrList)
        {
            var Requests = from lr in lrList
                           select new loginRequestDTO
                         {
                            requestID=lr.requestID,
                            userName=lr.userName,
                            firstName=lr.firstName,
                            lastName=lr.lastName,
                            phoneNumber=lr.phoneNumber,
                            email=lr.email,
                            password=lr.password,
                            groupName=lr.groupName
                         };
            return Requests.ToList();
        }
        public static loginRequestDTO convertLoginRequestDBToDTO(dal.LoginRequests lr)
        {
            var Request = new loginRequestDTO
                           {
                               requestID = lr.requestID,
                               userName = lr.userName,
                               firstName = lr.firstName,
                               lastName = lr.lastName,
                               phoneNumber = lr.phoneNumber,
                               email = lr.email,
                               password = lr.password,
                               groupName = lr.groupName
                           };
            return Request;
        }
    }
}
