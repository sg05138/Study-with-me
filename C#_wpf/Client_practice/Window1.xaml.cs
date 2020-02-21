using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Net;
using System.Net.Sockets;

namespace Client_Page
{
    /// <summary>
    /// Window1.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Window1 : Window
    {
        public Window1()
        {
            InitializeComponent();
        }

        private MySqlConnection getConn()
        {
            string strConn = "Server=localhost;Database=loginout;Uid=root;Pwd=1234";
            MySqlConnection conn = new MySqlConnection(strConn);
            return conn;
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            if (IDBox.Text == "")
            {
                MessageBox.Show("ID를 입력하세요!!");
                IDBox.Focus();
                return;
            }
            if (PasswordBox.Password == "")
            {
                MessageBox.Show("PWD를 입력하세요!!");
                PasswordBox.Focus();
                return;
            }
            MySqlConnection connect = getConn();
            connect.Open();
            string ConnectQurey = "SELECT * FROM info WHERE id='" + IDBox.Text + "'AND password='" + PasswordBox.Password + "'";
            MySqlCommand command = new MySqlCommand(ConnectQurey, connect);
            MySqlDataReader read = command.ExecuteReader();
            System.Console.Write("%s\n", IDBox.Text);
            System.Console.Write("%s\n", PasswordBox.Password);
            if (read.Read())
            {
                MessageBox.Show("로그인 완료!!");
                Application.Current.Properties["id"] = IDBox.Text;
                Window.GetWindow(this).Close();
                Window3 Homepage = new Window3();
                Homepage.Top = this.Top + (this.ActualHeight - Homepage.Height) / 2;
                Homepage.Left = this.Left + (this.ActualWidth - Homepage.Width) / 2;
                Homepage.ShowDialog();
            }
            else MessageBox.Show("로그인 실패ㅠ-ㅠ");
        }
    }
}
