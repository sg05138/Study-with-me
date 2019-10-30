using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SQLite;

namespace SQLTEST
{
    class Program
    {
        static void Main(string[] args)
        {
            string db = @"Datafile";
            if (!System.IO.File.Exists(db))
            {
                SQLiteConnection.CreateFile(@"Datafile");
                SQLiteConnection conn = new SQLiteConnection(@"Data Source=Datafile;Version=3");
                conn.Open();
                string query = "create table members (sender varchar(20),receiver varchar(20), msg varchar(20))";
                SQLiteCommand cmd = new SQLiteCommand(query, conn);
                int result = cmd.ExecuteNonQuery();
                conn.Close();
            }
            SQLiteConnection connect = new SQLiteConnection(@"Data Source=Datafile;Version=3");
            connect.Open();
            string Query = "insert into members (sender,receiver, msg) values ('Finn','Jake','Adventure time')";
            SQLiteCommand command = new SQLiteCommand(Query, connect);
            int Result = command.ExecuteNonQuery();

            Query = "select * from members";

            command = new SQLiteCommand(Query, connect);
            SQLiteDataReader read = command.ExecuteReader();
            while (read.Read())
            {
                Console.WriteLine(read["sender"].ToString() + " " + read["receiver"].ToString() + " " + read["msg"].ToString());
            }
            read.Close();
            connect.Close();
            
        }
    }
}

