using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Xml.Linq;
namespace bll.models
{
     public class Email
    {
        public static int SendEmail(string contactAddress, string subject, string body)
        {

            string FromMail = "‫racheli.litman@gmail.com";
            string emailTo = contactAddress;
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            mail.From = new MailAddress(FromMail);
            mail.To.Add(emailTo);
            mail.Subject = subject;
            mail.Body = body;
            SmtpServer.Port = 25;
            SmtpServer.Credentials = new System.Net.NetworkCredential("‫racheli.litman@gmail.com‬", "025711426");
            SmtpServer.EnableSsl = true;
            //SmtpServer.Send(mail);
            //return 1;
            try
            {
                SmtpServer.Send(mail);
               
            }
            catch (Exception e)
            {
                
                throw new Exception(e.ToString());
            }
            return 1;
        }
    }
}
