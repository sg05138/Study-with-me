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

namespace Server_Page
{
    /// <summary>
    /// Window2.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Window2 : Window
    {
        MySqlConnection conn = new MySqlConnection("Server=localhost;Database=loginout;Uid=root;Pwd=1234");

        public Window2()
        {
            InitializeComponent();
        }

        private void OK_Click(object sender, RoutedEventArgs e)
        {
            if (NameTextBox.Text == "")
            {
                MessageBox.Show("이름을 입력하세요!!");
                NameTextBox.Focus();
                return;
            }
            else if (AgeTextBox.Text == "")
            {
                MessageBox.Show("나이를 입력하세요!!");
                AgeTextBox.Focus();
                return;
            }
            else if (NewIDTextBox.Text == "")
            {
                MessageBox.Show("ID를 입력하세요!!");
                NewIDTextBox.Focus();
                return;
            }
            else if (NewPasswordTextBox.Password == "")
            {
                MessageBox.Show("PWD를 입력하세요!!");
                NewPasswordTextBox.Focus();
                return;
            }
            string insertQuery = "INSERT INTO info(id,password,name,age) VALUES('" + NewIDTextBox.Text + "','" + NewPasswordTextBox.Password + "','" + NameTextBox.Text + "','" + AgeTextBox.Text + "')";
            conn.Open();
            MySqlCommand cmd = new MySqlCommand(insertQuery, conn);
            try
            {
                if (cmd.ExecuteNonQuery() == 1)//내가 처리한 mysql에 정상적으로 들어감
                {
                    MessageBox.Show("회원가입 완료!!");
                    Window.GetWindow(this).Close();
                }
                else
                {
                    MessageBox.Show("오류");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("같은 아이디가 있습니다ㅜ-ㅜ");
            }
            conn.Close();
        }
    }
}
