namespace newwebapi.Controllers
{
    public class Leave
    {
        public string empname { get; set; }
        public string empcode { get; set; }      
        public string leavetype { get; set; }
        public string initialdate { get; set; }
        public string finaldate { get; set; }

        public string pinitialdate { get; set; }
        public string pfinaldate { get; set; }
        public string updatedby { get; set; }
    }
}