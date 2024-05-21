using bll.models;
using dal;
using DTOcars.models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class groups : Form
    {
        public groups()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Groups g = new Groups() {
                groupName = textBox4.Text,
                groupManagerID = (int)numericUpDown2.Value,
                maxPriceForHour = (int)numericUpDown3.Value };
            dataGridView1.DataSource= groupsBll.addGroup(g);
        }

        private void button2_Click(object sender, EventArgs e)
        {
         dataGridView2.DataSource= groupsBll.getGroupByManagerID((int)numericUpDown2.Value);

        }
    }
}
