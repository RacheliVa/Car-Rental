using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOcars.models
{
    public class userDTO
    {
        public int userID { get; set; }
        public string userName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public bool administrator { get; set; }
        public static List<userDTO> convertUsersDBToDTO(List<dal.Users> userList)
        {
            var users = from u in userList
                       select new userDTO
                       {
                           userID = u.userID,
                           userName=u.userName,
                           firstName=u.firstName,
                           lastName=u.lastName,
                           phoneNumber=u.phoneNumber,
                           email=u.email,
                           password=u.password,
                           administrator=u.administrator
                       };
            return users.ToList();
        }
        public static userDTO convertUsersDBToDTO(dal.Users u)
        {
            var user = new userDTO
                        {
                            userID = u.userID,
                            userName = u.userName,
                            firstName = u.firstName,
                            lastName = u.lastName,
                            phoneNumber = u.phoneNumber,
                            email = u.email,
                            password = u.password,
                            administrator = u.administrator
            };
            return user;
        }
    }
}
