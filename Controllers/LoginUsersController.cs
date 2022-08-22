using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
 
using System.Data;
using newwebapi.Models;

namespace newwebapi.Controllers
{
    public class LoginUsersController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString);

        [Route("api/LoginUsers/register")]
        [HttpPost]
        public string Registerme(LoginUsers loginUsers)
        {
            using (var cmd = new SqlCommand("Registerlogin", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("username", loginUsers.username);
                cmd.Parameters.AddWithValue("password", loginUsers.password);
                cmd.Parameters.AddWithValue("empcode", loginUsers.empcode);

                con.Open();
                int c = cmd.ExecuteNonQuery();
                con.Close();
                if (c == 1)
                {
                    return " Account Added";
                }
                return "Invalid Employ Code";
            }
        }
        [HttpPost]
        public int post(LoginUsers loginUsers)
        {            /* using (var cmd = new SqlCommand("SaveEmpprocedure", con))
             {
                 cmd.CommandType = CommandType.StoredProcedure;

                 cmd.Parameters.AddWithValue("username", loginUsers.username);
                 cmd.Parameters.AddWithValue("password", loginUsers.password);
                 cmd.Parameters.AddWithValue("empcode", loginUsers.empcode);

                 con.Open();
                 cmd.ExecuteNonQuery();
                 con.Close();

             }*/
            string usernamee = loginUsers.username;
            try {
                string password;

                string query = "select password from dbo.loginusers where username=@usernamee";
                DataTable table = new DataTable();

                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddWithValue("@usernamee", usernamee);
                    da.Fill(table);
                    password = table.Rows[0]["password"].ToString().Trim();

                }
                if (loginUsers.password.Equals(password))
                {
                    return 1;
                }
            }catch(Exception e)
            {
                return 0;
            }
            return 0;
            
        }
        /*
     [HttpGet]
            public HttpResponseMessage get(LoginUsers loginUsers)
            {
                string usernamee = loginUsers.username;
                string password;
                string query = "select password from dbo.loginusers where username=@usernamee";
                DataTable table = new DataTable();

                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddWithValue("@usernamee", usernamee);
                    da.Fill(table);
                    password = table.Rows[0]["password"].ToString().Trim();   

                }
                if (loginUsers.password.Equals(password))
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Successfully Verified");
                }
                return Request.CreateResponse(HttpStatusCode.OK, "Invalid Login");
            }
        */
       
    }
}