import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { LoginUsers } from './login-users';
import { Timesheetclass } from './timesheetclass';
import { Users } from './users';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  public loginstatus: boolean = false;


constructor(private http:HttpClient,private  router:Router  ) {


 }



username:any;
role:any;
special=false;
url="https://localhost:44376/api/";

checkuserlogin()
{
if(localStorage.getItem('username'))
{this.loginstatus=true;
this.username=localStorage.getItem('username');
 this.role= this.getrole();
 if(this.role=="owner")
 this.special=true;
 else
 this.special=false;
  return this.loginstatus;
}
else
this.loginstatus=false;
return this.loginstatus;

}
getrole()
{
  return this.http.get<any>(this.url+"Employ/getrole" ) ;

}
login(loginusers:LoginUsers)
{

  console.log( "Logging in ");
 /* return this.http.get<any>(this.url+"LoginUser"+loginusers);
  this.router.navigateByUrl("/default/dash");*/

 this.http.post(this.url+"LoginUsers",loginusers).subscribe(data=>{


 if(data=='1'  )
{ this.router.navigateByUrl("/default/dash");
this.loginstatus=true;
localStorage.setItem('username',loginusers.username);
this.username=localStorage.getItem('username');
this.loginstatus=true;

}
 else
  {//this.loginstatus=false;
    Swal.fire("Login failed!!","Incorrect Login id or password","error");

    this.loginstatus=false;
  }
 });

console.log(this.username);
}
posttimesheet(timesheet:Timesheetclass[])
{
  if(this.loginstatus)
this.http.post(this.url+"Employ/posttimesheet",timesheet).subscribe((data:any)=>{

  Swal.fire(data, "Timesheet saved Successfully!", "info");



});
else
Swal.fire("Login failed!!","Incorrect Login id or password","error");

}
//Apply Leave
applyleave(leave:any)
{
this.http.post(this.url+"Employ/applyleave",leave).subscribe((data:any)=>{
  if(data.toString().includes("Failed")||data.toString()==null)
  Swal.fire(data,"Leave Status","error");
  else
  Swal.fire(data,"Leave Status","success");
});
}

// updateleave

updateleave(leave:any)
{
this.http.put(this.url+"Employ/updateleave",leave).subscribe((data:any)=>{
  if(data.toString().includes("Failed")||data.toString()==null)
  Swal.fire(data,"Leave Status","error");
  else
  Swal.fire(data,"Leave Status","success");
});
}
register(loginusers:LoginUsers)
{
  if(this.loginstatus)
  this.http.post(this.url+"LoginUsers/register",loginusers).subscribe((data:any)=>{Swal.fire(data,"","info");});
else
Swal.fire("Login failed!!","Incorrect Login id or password","error");

}
//CREATE EMPLOY
  postapiData(postdata:Users)
  {
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*'*/

  //const body=JSON.stringify(postdata);
  //console.log(body+"this is body");
if(this.loginstatus)
    this.http.post(this.url+"Employ/post",postdata).subscribe(data=>{
      console.log("loggg "+data);
      if(data)
      Swal.fire("Created!", "Employ Created Successfully!", "success");
      else if(data==0||data==null||data=='')
      Swal.fire("Failed!", "Error occured while Creating Employ", "error");

    } );
    else
    Swal.fire("Login failed!!","Incorrect Login id or password","error");
  }
  //UDATE EMPLOY
  update(updatedata:Users)
  {
    if(this.loginstatus)
    this.http.put(this.url+"Employ/put",updatedata).subscribe(data=>{
      if(data)
      Swal.fire("Updated!", "Employ updated Successfully!", "success");
      else if(data==0||data==null||data=='')
      Swal.fire("Failed!", "Error occured while Updating Employ", "error");

    });
    else
    Swal.fire("Login failed!!","Incorrect Login id or password","error");

  }
  //DELETE Employ
  delemp(empcode:any)
  {
    if(this.loginstatus)
    Swal.fire({
      title: 'Do you want to Delete '+empcode+' ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(this.url+"Employ/del/"+empcode);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    else
    Swal.fire("Login failed!!","Incorrect Login id or password","error");
  }
  delleave(leave:any)
  {
    console.log("cancel api");
    if(this.loginstatus)
    Swal.fire({
      title: 'Do you want to Cancel leave '+leave.initialdate + ' to '+leave.finaldate+' ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.post(this.url+"Employ/Cancelleaves",leave).subscribe((data:any)=>{
          Swal.fire(
            data,
            'Your Leaves has been Cancelled.',
            'success'
          )
        });

      }
    })
    else
    Swal.fire("Login failed!!","Incorrect Login id or password","error");
  }

  //GET EMPLOY
   getapidata():Observable<any[]>
  {
    console.log("receving data");
        return this.http.get<any>(this.url+"Employ/get");

  }
  getapipages( ):Observable<any[]>
  {
    console.log("getting pages" );
    return this.http.get<any>(this.url+"Employ/getpages?uid="+ this.username) ;
  }
  getapiholidays( ):Observable<any[]>
  {
    console.log("getting holidays");
    return this.http.get<any>(this.url+"Employ/getholidays" ) ;
  }
  getemps( ):Observable<any[]>
  {
    console.log("getting employs");
    return this.http.get<any>(this.url+"Employs" ) ;
  }
  getapitimesheet( date:any):Observable<any[]>
  {
    console.log("getting pages");
    return this.http.get<any>(this.url+"Employ/gettimesheet?dates="+date) ;
  }
  getchilds() :Observable<any[]>{
    return this.http.get<any>(this.url+"Employ/getroutes?uid="+ localStorage.getItem('username') ) ;
  }
  getstates():Observable<any[]>
  {
    return this.http.get<any>(this.url+"Employ/getstates") ;
  }
getempleaves():Observable<any[]>
{
  return this.http.get<any>(this.url+"Employ/empleaves?uid="+ this.username);

}
}
