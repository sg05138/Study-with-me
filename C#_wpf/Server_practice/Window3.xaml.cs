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

namespace Server_Page
{
    /// <summary>
    /// Window3.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Window3 : Window
    {
        MySqlConnection conn = new MySqlConnection("Server=localhost;Database=loginout;Uid=root;Pwd=1234");
        static byte[] getBytes = new byte[100];
        static Socket serverSock;
        string userid = Application.Current.Properties["id"].ToString();


        private void makeLabel()
        {
            Binding b = new Binding();
            b.Source = userid + UID.Content;
            UID.SetBinding(Label.ContentProperty, b);
        }

        private void makeServer()
        {
            serverSock = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.IP);
            //소캣 생성
            serverSock.Bind(new IPEndPoint(IPAddress.Any, 10801));
            serverSock.Listen(100);
        }
       
        private void sendStr(IAsyncResult a)
        {
            Socket tmpSock = (Socket)a.AsyncState;
            int strlen = tmpSock.EndSend(a);
            MessageBox.Show("전송완료");
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Socket tmpSock = serverSock.Accept();
            //분신소캣 허가받게 함
            byte[] msg = Encoding.Default.GetBytes(userid + "를 친구추가 하겠습니까?");
            tmpSock.BeginSend(msg, 0, msg.Length, SocketFlags.None, new AsyncCallback(sendStr), tmpSock);
        }

        public Window3()
        {
            InitializeComponent();
            makeLabel();
            makeServer();
        }
    }
}
