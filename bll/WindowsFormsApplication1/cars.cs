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
using bll.models;
using dal;

namespace WindowsFormsApplication1
{
    public partial class cars : Form
    {
        public cars()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }
        //הוספה
        private void button1_Click(object sender, EventArgs e)
        {
            Cars c = new Cars()
            {
                onerID = (int)numericUpDown1.Value,
                yearProduce = (int)numericUpDown2.Value,
                model = textBox4.Text,
                priceForHour = (int)numericUpDown3.Value
            };
            carsBll.addCar(c);
        }
        //הצגה
        private void button2_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = carDTO.convertCarDBToDTO(staticDB.DataBase.Cars.ToList());
        }

        private void button4_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click_1(object sender, EventArgs e)
        {
            dataGridView1.DataSource = carsBll.getCarsByUserId((int)numericUpDown1.Value);

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void numericUpDown4_ValueChanged(object sender, EventArgs e)
        {

        }

        private void button4_Click_1(object sender, EventArgs e)
        {
            carDTO c = carsBll.getCarByCarID((int)numericUpDown4.Value);
            if (c != null) label2.Text = c.carID + " " + c.model;
            else label2.Text = "null";
        }
    }
}
