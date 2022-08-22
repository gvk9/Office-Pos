
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,   Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

import { Timesheetclass } from 'src/app/timesheetclass';
import { Users } from 'src/app/users';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  providers: [DatePipe]
})
export class TimesheetComponent implements OnInit {
updatedby:any="";
choosedate:boolean=false;
hiddenbtn:boolean=false;
empname="";

  constructor(private fb:FormBuilder,private api:ApiServiceService,private datepipe:DatePipe) { }
@Input()
initialdate:any;
finaldate:any;
leavetype="";
lempname="";
maindate:any;
tleavetype="";
hours:any;
comments="";
leaveempcode='';
c=0;

  today:any;

  timesheets:any=[];
emplist:any=[];
 empleaves:any=[];
 edits=false;
 edited=false;
 pinitialdate="";
 pfinaldate="";
 showbody=false;
  ngOnInit(): void {
     this.showbody=false;

    this.api.getemps().subscribe((data:any)=>{

for(let i=0;i<data.length;i++)
        this.emplist.push(data[i]);

      });


    this.refresh();
this.choosedate=false;
    this.edits=false;
 this.edited=false;
 this.pinitialdate="";
 this.pfinaldate="";

this.today = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    //[{'empname':"test",'empcode':12,'hours':6},{'empname':"test2",'empcode':34,'hours':6},{'empname':"test2",'empcode':36,'hours':6},{'empname':"test3",'empcode':39,'hours':6},{'empname':"test2",'empcode':36,'hours':6},{'empname':"test4",'empcode':40,'hours':6}];

    //getemp list
    /*this.timesheets=[{'empname':"",'empcode':"",'date':"",'hours':"",'leavetype':"",'comments':"",'updatedby':""}];

//get sql  qttendance , check if empcode is present else add in timesheet
    for (let i = 0; i < this.emplist.length; i++) {
      if(!this.timesheets['empcode'].includes(this.emplist[i].empcode))
      {
        this.timesheets.push({'empname':this.emplist[i].empname,'empcode':this.emplist[i].empcode});
      }

    }*/

    this.updatedby=this.api.username;


  }


  leaveform=this.fb.group({
     initialdate: ['',[Validators.required]],
     finaldate: ['',[Validators.required]],
    leavetype:['', [Validators.required]],
    leaveempcode:['',[Validators.required]],


  });
empidleave(i: any)
{
  let ln="";
  this.emplist.forEach((element:  any) => {
    if(element.empcode==i)
    {
    ln=element.empname;
  }

  });

return ln.toString();

}
  apply()
  {
console.log(this.edits +""+ this.edited);
   if(this.finaldate>this.initialdate)
   {
    if(this.edits && this.edited)
    {
      let leave={"empname":this.empidleave(this.leaveempcode),"empcode": this.leaveempcode ,"initialdate":this.datepipe.transform(this.initialdate, 'yyyy-MM-dd'),"finaldate":this.datepipe.transform(this.finaldate, 'yyyy-MM-dd'),"leavetype":this.leavetype,"updatedby":this.updatedby,"pinitialdate":this.datepipe.transform(this.pinitialdate, 'yyyy-MM-dd'),"pfinaldate":this.datepipe.transform(this.pfinaldate, 'yyyy-MM-dd')};

      this.api.updateleave(leave);
this.refresh();
console.log(leave);
    }
    else
    {
      let leave={"empname":this.empidleave(this.leaveempcode),"empcode": this.leaveempcode ,"initialdate":this.datepipe.transform(this.initialdate, 'yyyy-MM-dd'),"finaldate":this.datepipe.transform(this.finaldate, 'yyyy-MM-dd'),"leavetype":this.leavetype,"updatedby":this.updatedby};
this.api.applyleave(leave);
this.refresh();
console.log(leave);
    }

   }
   else
   {
    Swal.fire("Choose proper Date Range","","info");

   }

  }

submit()
{
  let f=0;
if(this.maindate==""||this.maindate==null)
{Swal.fire("Choose Date","","info");
}
else
{

  for(let i=0;i<this.timesheets.length;i++)
  {
    if(this.timesheets[i]['hours']>0 && this.timesheets[i]['tleavetype'].includes('Leave'))
       { Swal.fire("working hours should be 0 to apply for leave","","info");
       f=1;
  }
  else if(this.timesheets[i]['hours']=='0' && this.timesheets[i]['tleavetype'].includes('Out'))
       { Swal.fire("Hours worked can't be zero while choosing ' In Work '","","info");
      f=1;}
      else if(this.timesheets[i]['hours']=='0' && (this.timesheets[i]['tleavetype']==null ||this.timesheets[i]['tleavetype']=='' || this.timesheets[i]['comments']==''|| this.timesheets[i]['comments']==null) )
      {
        f=1;
        Swal.fire("Choose Leave Type and fill comments","","info");
      }
      else if(this.timesheets[i]['hours']<0||this.timesheets[i]['hours']>10 )
      {
        f=1;
        Swal.fire("Hours ranges from 0 t0 10","","info");
      }
        else if(this.timesheets[i]['onleave']==true)
        {
          Swal.fire({
            title: this.timesheets[i]['empname'] +'Applied for Leave',
            text: "Do you still want to update ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!!'
          }).then((result) => {
            if (result.isConfirmed) {
              f=0;
              Swal.fire(
                'OK!',
                'Your response is captured.',
                'success'
              )
            }
            else
            f=1;
          })
        }



  }

  if(f==0)
  {
    for(let i=0;i<this.timesheets.length;i++)
    if(this.timesheets[i]['hours']==0)
    this.timesheets[i]['onleave']=true;


    //post
    this.api.posttimesheet(this.timesheets);


  }
}
}
gettimesdata(){
  this.c=0;
  this.timesheets=[];
this.emplist=[];

  this.api.getapitimesheet(this.maindate).subscribe((data:any)=>{
    for (let i = 0; i < data.length; i++) {
      this.c++;
      this.timesheets[i]=new Timesheetclass(data[i]['empname'],data[i]['empcode'] ,data[i]['hours'],data[i]['leavetype'], data[i]['date'],data[i]['comments'],data[i]['updatedby'],data[i]['onleave']);
    }


  });


  this.api.getemps().subscribe((data:any)=>{

    for (let i = 0; i < data.length; i++) {

      let f=0;
      this.timesheets.forEach((element: Timesheetclass) => {
        if(element.empcode==(data[i]['empcode'])){f=1;}
      });
      if(f==0)
      {

        this.timesheets[this.c++]=new Timesheetclass(data[i]['empname'],data[i]['empcode'],0,'', this.maindate,'','','');
      }


    }


   }) ;



}
changesdate(){

  this.choosedate=true;
  this.gettimesdata();

  if(this.maindate==""||this.maindate==null)
{Swal.fire("Date dismissed","you have unselected the date, choose again","info");
}
else if(this.maindate!=this.today)
    {
      this.hiddenbtn=true;
     Swal.fire("Timesheet is Frozen for selected date" ,"","info" );
    }
    else
    {  this.hiddenbtn=false;


    }

}
edit(i:any)
{
this.empname=i.empname;
this.leaveempcode=i.empcode;
this.pinitialdate=i.initialdate;
this.pfinaldate=i.finaldate;
this.initialdate=i.initialdate;
this.finaldate=i.finaldate;
this.leavetype=i.leavetype;

  this.edits=true;

}
del(i:any)
{
  let leave={ "empcode": i.empcode ,"initialdate":this.datepipe.transform(i.initialdate, 'yyyy-MM-dd'),"finaldate":this.datepipe.transform(i.finaldate, 'yyyy-MM-dd'),"updatedby":this.updatedby};

  this.api.delleave(leave);
this.getleaves();
}
changes()
{
this.edited=true;
}
getleaves()
{

  this.api.getempleaves().subscribe((data:any)=>{this.empleaves=data; });



}
refresh()
{
  this.empleaves=[];
  this.getleaves();
}
show()
{
    this.showbody=!this.showbody;
}
}
