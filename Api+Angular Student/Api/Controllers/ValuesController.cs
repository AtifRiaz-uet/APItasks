using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using WebAPI.Database;
using System.Configuration;
using Newtonsoft.Json;
using System.Web.Mvc;
using System.Runtime.Caching;

namespace WebAPI.Controllers
{
    public class ValuesController : ApiController

    {
        // GET: studentInfo
        
        public List<GetStd> Get()
        {

                GetStd student = new GetStd();
                return student.GetRecord();
            
        }
        public GetStd Get(int ID)
        {
            GetStd student = new GetStd();
            return student.GetRecord(ID);

        }
        
    }
}
