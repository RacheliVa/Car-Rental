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
namespace WindowsFormsApplication1
{
    public partial class disposableRent : Form
    {
        public disposableRent()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = disposableRentBll.getDisposableRentsByCarID((int)numericUpDown1.Value);
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void numericUpDown2_ValueChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            dal.disposableRent d = new dal.disposableRent()
            {
                carID = (int)numericUpDown2.Value,
                location = textBox4.Text
            };
            dataGridView1.DataSource = disposableRentBll.addDisposableRent(d);


        }
    }
}
