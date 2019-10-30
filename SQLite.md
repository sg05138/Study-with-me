## SQLite란??
구글 안드로이드 운영 체제에 기본으로 탑재된 데이터베이스이다.

SQLite는 파일 형식으로, 파일 안을 DB 처럼 사용한다.

MySQL 같은 데이터베이스 관리 시스템이지만, 서버가 아니라 응용 프로그램에 넣어 사용하는 비교적 가벼운 데이터베이스이다.


~~~
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
~~~
> (Datafile 파일이 존재하지 않는다면) Datafile 이라는 이름의 SQLite 파일을 만든다.

> 파일 생성 후 파일 안에 members table을 생성한다.

~~~
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
~~~
> members table에 정보를 삽입한 후 SQLite 파일의 table 행들을 출력한다.
