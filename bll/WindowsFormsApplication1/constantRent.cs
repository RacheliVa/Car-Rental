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
    public partial class constantRent : Form
    {
        public constantRent()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = constantRentBll.getConstantRentsByCarID((int)numericUpDown1.Value);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            dal.constantRent c = new dal.constantRent()
            {
                carID = (int)numericUpDown2.Value,
                location = textBox4.Text
            };
            dataGridView1.DataSource = constantRentBll.addConstantRent(c);

        }
    }
}
