using newwebapi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace newwebapi.Controllers
{
    
    public class EmployController : ApiController
    {
        [HttpPost]
        public void post(Employ emp)
        {
             
           
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("SaveEmpprocedure", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("empname",emp.empname);
                cmd.Parameters.AddWithValue("empcode", emp.empcode);
                cmd.Parameters.AddWithValue("empphone", emp.empphone);
                cmd.Parameters.AddWithValue("profilepic", emp.profilepic);
                cmd.Parameters.AddWithValue("empdept", emp.empdept);
                cmd.Parameters.AddWithValue("empdesig", emp.empdesig);
                cmd.Parameters.AddWithValue("empjoindate", emp.empjoindate);
                cmd.Parameters.AddWithValue("empgender", emp.empgender);
                cmd.Parameters.AddWithValue("empbasicamount", emp.empbasicamount);
                cmd.Parameters.AddWithValue("address", emp.address);
                cmd.Parameters.AddWithValue("city", emp.city);
                cmd.Parameters.AddWithValue("state", emp.state);
                cmd.Parameters.AddWithValue("zip", emp.zip);
                cmd.Parameters.AddWithValue("createdby", emp.createdby);
                cmd.Parameters.AddWithValue("creationdate", emp.creationdate);


                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        [Route("api/Employ/posttimesheet")]
        [HttpPost]
        public string posttimesheet(Timesheet[] timesheet)
        {
            int f = 0;

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
                for (int i = 0; i < timesheet.Length; i++)
                {
                    using (var cmd = new SqlCommand("posttimesheetpro", con))
            {
                
               
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("empname", timesheet[i].empname);
                    cmd.Parameters.AddWithValue("empcode", timesheet[i].empcode);
                    cmd.Parameters.AddWithValue("hours", timesheet[i].hours);
                    cmd.Parameters.AddWithValue("date", timesheet[i].customdate);
                    cmd.Parameters.AddWithValue("leavetype", timesheet[i].tleavetype);                   
                    cmd.Parameters.AddWithValue("comments", timesheet[i].comments);
                    cmd.Parameters.AddWithValue("updatedby", timesheet[i].updatedby);
                        try
                        {
                            con.Open();
                            cmd.ExecuteNonQuery();
                            con.Close();
                        }catch(Exception e)
                        {
                            f = 1;
                            Console.WriteLine(e.Message);
                        }                   
                        
                   

                }
            

            
            }
            if (f == 1)
                return "Failed";
            else
                return "Submitted";
        }

        [Route("api/Employ/applyleave")]
        [HttpPost]
        public string applyleave(Leave leave)
        {
            int f = 0;

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
                 
                    using (var cmd = new SqlCommand("applyleave", con))
                    {


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("empname", leave.empname);
                        cmd.Parameters.AddWithValue("empcode", leave.empcode);                       
                        cmd.Parameters.AddWithValue("initialdate",leave.initialdate);
                cmd.Parameters.AddWithValue("finaldate", leave.finaldate);
                cmd.Parameters.AddWithValue("leavetype", leave.leavetype);                       
                        cmd.Parameters.AddWithValue("updatedby", leave.updatedby);
                        try
                        {
                            con.Open();
                            cmd.ExecuteNonQuery();
                            con.Close();
                        }
                        catch (Exception e)
                        {
                            f = 1;
                            Console.WriteLine(e.Message);
                        }



                    



                }
            if (f == 1)
                return "Failed to Apply";
            else
                return "Applied Leave";
        }
        
     
        [HttpPut]
        [Route("api/Employ/updateleave")]
        public string updateleave(Leave leave)
        {
            int f = 0;

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))

            using (var cmd = new SqlCommand("Updateleaves", con))
            {


                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("empname", leave.empname);
                cmd.Parameters.AddWithValue("empcode", leave.empcode);
                cmd.Parameters.AddWithValue("initialdate", leave.initialdate);
                cmd.Parameters.AddWithValue("finaldate", leave.finaldate);
                cmd.Parameters.AddWithValue("leavetype", leave.leavetype);
                cmd.Parameters.AddWithValue("updatedby", leave.updatedby);
                cmd.Parameters.AddWithValue("pinitialdate", leave.pinitialdate);
                cmd.Parameters.AddWithValue("pfinaldate", leave.pfinaldate);
                try
                {
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                catch (Exception e)
                {
                    f = 1;
                    Console.WriteLine(e.Message);
                }







            }
            if (f == 1)
                return "Failed to Apply";
            else
                return "Applied Leave";
        }

        [HttpPut]
        public void update(Employ emp)
        {
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("Updatesprocedure", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("empid", emp.empid);
                cmd.Parameters.AddWithValue("empname", emp.empname);
                cmd.Parameters.AddWithValue("empcode", emp.empcode);             
                cmd.Parameters.AddWithValue("empphone", emp.empphone);
                byte[] imageData = File.ReadAllBytes(emp.profilepic);
                cmd.Parameters.AddWithValue("profilepic", imageData);
                //cmd.Parameters.AddWithValue("profilepic", emp.profilepic);
                cmd.Parameters.AddWithValue("empphone", emp.empphone);
                cmd.Parameters.AddWithValue("empdept", emp.empdept);
                cmd.Parameters.AddWithValue("empdesig", emp.empdesig);
                cmd.Parameters.AddWithValue("empjoindate", emp.empjoindate);
                cmd.Parameters.AddWithValue("empgender", emp.empgender);
                cmd.Parameters.AddWithValue("empbasicamount", emp.empbasicamount);
                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        [HttpGet]
        public HttpResponseMessage get()
        {
            string query = "select * from dbo.emp";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);


            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [HttpGet]
        [Route("api/Employ/getstates")]
        public HttpResponseMessage getstates()
        {
            string query = "select * from dbo.statelist";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);


            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        [Route("api/Employ/del/{empcode}")]
        [HttpDelete]
        public void delete(string empcode)
        {
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("delprocedure", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@empcode", empcode);
                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

            }
        }

     
        [HttpPost]
        [Route("api/Employ/Cancelleaves")]
        public string cancelleaves(Leave leave)
        {
            int f = 0;

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))

            using (var cmd = new SqlCommand("Cancelleaves", con))
            {


                cmd.CommandType = CommandType.StoredProcedure;
           
                cmd.Parameters.AddWithValue("empcode", leave.empcode);
                cmd.Parameters.AddWithValue("initialdate", leave.initialdate);
                cmd.Parameters.AddWithValue("finaldate", leave.finaldate);
           
                cmd.Parameters.AddWithValue("updatedby", leave.updatedby);
              
                try
                {
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                catch (Exception e)
                {
                    f = 1;
                    Console.WriteLine(e.Message);
                }







            }
            if (f == 1)
                return "Failed to Cancel";
            else
                return "Cancelled Leaves";
        }

        [HttpGet]
        [Route("api/Employ/getpages")]
        public HttpResponseMessage getpages(string uid)
            {
           
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("getscreens", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
               
                using (var da = new SqlDataAdapter(cmd))
                {
                   
                    cmd.Parameters.AddWithValue("@uid", uid);
                   
                    da.Fill(table);


                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        [HttpGet]
        [Route("api/Employ/getroutes")]
        public HttpResponseMessage getroutes(string uid)
        {

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("getroutes", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                using (var da = new SqlDataAdapter(cmd))
                {

                    cmd.Parameters.AddWithValue("@uid", uid);

                    da.Fill(table);


                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [HttpGet]
        [Route("api/Employ/getholidays")]
        public HttpResponseMessage getholidays()
        {
            string query = "select * from dbo.holidays";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);


            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        [HttpGet]
        [Route("api/Employs")]
        public HttpResponseMessage getemps()
        {
            string query = "select empname,empcode from dbo.emp";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);


            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [HttpGet]
        [Route("api/Employ/gettimesheet")]
        public HttpResponseMessage gettimesheet(string dates)
        {
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("timesheetpro", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.Parameters.AddWithValue("@date", dates);
                    da.Fill(table);
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [Route("api/Employ/empleaves")]
        [HttpGet]
     
        public HttpResponseMessage getleaves(string uid)
        {

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["empdb"].ConnectionString))
            using (var cmd = new SqlCommand("empleaves", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                using (var da = new SqlDataAdapter(cmd))
                {

                    cmd.Parameters.AddWithValue("@uid", uid);

                    da.Fill(table);


                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

    }
}
