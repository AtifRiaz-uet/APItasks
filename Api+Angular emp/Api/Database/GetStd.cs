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
        public int Id { get; set; }
        public string Name { get; set; }
        public string Designation { get; set; }

        public List<GetStd> stdList = new List<GetStd>();

        public void deleteid(int id)
        {
            SqlConnection con = new
            SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
            con.Open();
            string query = "DELETE EMPLOYEES WHERE Id=" + id + ";";
            SqlDataAdapter sda = new SqlDataAdapter(query, con);
            sda.SelectCommand.ExecuteNonQuery();
            con.Close();
        }


        public List<GetStd> GetRecord()

        {
            SqlConnection con = new
            SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
            con.Open();
            string query = "SELECT * FROM EMPLOYEES";
            SqlDataAdapter sda = new SqlDataAdapter(query, con);
            DataTable table = new DataTable();
            sda.Fill(table);
            for (int index =0; index < table.Rows.Count; index++)
            {
                GetStd std = new GetStd();
                std.Id = Convert.ToInt32(table.Rows[index]["Id"]);
                std.Name = table.Rows[index]["Name"].ToString();
                std.Designation = table.Rows[index]["Designation"].ToString();
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