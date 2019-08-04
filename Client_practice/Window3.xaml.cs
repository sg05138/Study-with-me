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
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Windows.Threading;
using System.Net.Sockets;
using System.Net;

namespace Client_Page
{
    /// <summary>
    /// Window3.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Window3 : Window
    {
        MySqlConnection conn = new MySqlConnection("Server=localhost;Database=loginout;Uid=root;Pwd=1234");
        static byte[] getBytes = new byte[100];
        static Socket clientSock;
        string userid = Application.Current.Properties["id"].ToString();
        string str;

        private void makeLabel()
        {
            Binding b = new Binding();
            b.Source = userid + UID.Content;
            UID.SetBinding(Label.ContentProperty, b);
        }

        private void getStr(IAsyncResult a)
        {
            clientSock = (Socket)a.AsyncState;
            int strLength = clientSock.EndReceive(a);
            str = Encoding.Default.GetString(getBytes);
            MessageBox.Show(str);
        }

        private void nextPage()
        {
            //Application.Current.Properties["question"] = str;
            Window4 window4 = new Window4();
            window4.Top = this.Top + (this.ActualHeight - window4.Height) / 2;
            window4.Left = this.Left + (this.ActualWidth - window4.Width) / 2;
            window4.ShowDialog();
        }

        private void Client()
        {
            clientSock = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.IP);
            clientSock.Connect(new IPEndPoint(IPAddress.Loopback, 10801));
            //서버와 연결됨
            clientSock.BeginReceive(getBytes, 0, getBytes.Length, SocketFlags.None, new AsyncCallback(getStr), clientSock);
        }

        public Window3()
        {
            InitializeComponent();
            makeLabel();
            Client();
        }
    }
}
