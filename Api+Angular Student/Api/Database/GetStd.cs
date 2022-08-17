using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Newtonsoft.Json;
using System.Web.Mvc;

namespace WebAPI.Database
{
    public class GetStd
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public List<GetStd> stdList = new List<GetStd>();
 

        public List<GetStd> GetRecord()

        {
            SqlConnection con = new
            SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
            con.Open();
            string query = "SELECT TOP 10 * FROM StudentDATA";
            SqlDataAdapter sda = new SqlDataAdapter(query, con);
            DataTable table = new DataTable();
            sda.Fill(table);
            for (int index =0; index < table.Rows.Count; index++)
            {
                GetStd std = new GetStd();
                std.ID = Convert.ToInt32(table.Rows[index]["ID"]);
                std.Name = table.Rows[index]["Name"].ToString();
                std.Address = table.Rows[index]["Address"].ToString();
                stdList.Add(std);
            }
            con.Close();
            return (stdList);

        }
        public GetStd GetRecord(int ID)
        {
            stdList = GetRecord();
            GetStd newstd = stdList[ID - 1];
            return newstd;
        }

    }
}