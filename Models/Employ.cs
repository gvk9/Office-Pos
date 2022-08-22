using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace newwebapi.Models
{
    public class Employ
    {
        public int empid { get; set; }
        public string empname{get; set; }
        public string empdept { get; set; }
        public string empdesig { get; set; }
        public string empcode { get; set; }
        public string empphone { get; set; }
        public string profilepic { get; set; }
        public string empjoindate { get; set; }
        public string empgender { get; set; }
        public string empbasicamount { get; set; }

        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public string createdby { get; set; }

        public string creationdate { get; set; }
        public string lastmodifiedby { get; set; }
        public string lastmodifieddate { get; set; }


    }
}