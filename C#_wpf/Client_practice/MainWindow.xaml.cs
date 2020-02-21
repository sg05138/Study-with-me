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
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Net;
using System.Net.Sockets;

namespace Client_Page
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void Button1_Click(object sender, RoutedEventArgs e)
        {
            Window1 LoginWindow = new Window1();
            LoginWindow.Top = this.Top + (this.ActualHeight - LoginWindow.Height) / 2;
            LoginWindow.Left = this.Left + (this.ActualWidth - LoginWindow.Width) / 2;
            LoginWindow.ShowDialog();
        }
        private void Button2_Click(object sender, RoutedEventArgs e)
        {
            Window2 newLoginWindow = new Window2();
            newLoginWindow.Top = this.Top + (this.ActualHeight - newLoginWindow.Height) / 2;
            newLoginWindow.Left = this.Left + (this.ActualWidth - newLoginWindow.Width) / 2;
            newLoginWindow.ShowDialog();
        }
    }
}
