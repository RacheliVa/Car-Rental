using dal;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using bll.models;
using DTOcars.models;

namespace WindowsFormsApplication1
{
    public partial class users : Form
    {
        public users()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Users u = new Users() { userName = textBox2.Text, phoneNumber = textBox1.Text, password = textBox4.Text };
           dataGridView1.DataSource= usersBll.addUser(u);
        }

        private void users_Load(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
          userDTO u= usersBll.findUser(textBox2.Text, textBox4.Text);
            label2.Text = u.firstName + "- " + u.lastName + "- " + u.password + "- " + u.phoneNumber + "- " + u.userID;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = usersBll.getUsersByGroupID((int)numericUpDown1.Value);
        }

        private void textBox10_TextChanged(object sender, EventArgs e)
        {

        }

        private void button4_Click(object sender, EventArgs e)
        {
            LoginRequests l = new LoginRequests()
            {
                userName = textBox3.Text,
                phoneNumber = textBox5.Text,
                password = textBox6.Text,
                email = textBox7.Text,
                firstName = textBox8.Text,
                lastName = textBox9.Text,
                groupName = textBox10.Text
            };
          dataGridView1.DataSource=  usersBll.addUser(l);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            List<int> groupsId =  groupDTO.convertGroupDBToDTO(staticDB.DataBase.Groups.ToList()) .Select(g => g.groupID).ToList();
            dataGridView1.DataSource= usersBll.getUsersByGroupsID(groupsId);
        }
    }
}
