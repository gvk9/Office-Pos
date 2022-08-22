using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace newwebapi.Models
{
    public class Timesheet
    {
        public string empname { get; set; }
        public string empcode { get; set; }
        public int hours { get; set; }

        public string tleavetype { get; set; }
        public string customdate { get; set; }
        public string comments { get; set; }
        public string updatedby { get; set; }
    }
}