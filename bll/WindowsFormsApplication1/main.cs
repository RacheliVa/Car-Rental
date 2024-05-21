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
    public partial class main : Form
    {
        public main()
        {
            InitializeComponent();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            users u = new users();
            u.Show();

        }

        private void button6_Click(object sender, EventArgs e)
        {
            orders o = new orders();
            o.Show();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            requests r = new requests();
            r.Show();


        }

        private void button1_Click(object sender, EventArgs e)
        {
            cars c = new cars();
            c.Show();
             
        }

        private void main_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            groups g = new groups();
            g.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            disposableRent d = new disposableRent();
            d.Show();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            constantRent c = new constantRent();
            c.Show();
    
        }
    }
}
