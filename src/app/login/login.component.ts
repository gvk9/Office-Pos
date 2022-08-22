import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiServiceService,private router:Router ) { }
  userName:string="";
  passWord:string="";
  empcode:string="";
  registerme=true;
  savebtn=false;

  ngOnInit(): void {
  }

  login()
  {
     var loginusers= {
     username:this.userName,
     empcode:"",
     password:this.passWord

  };
  //GET
  /*this.api.login(loginusers).subscribe((data:any)=>{
    this.status=data;}) ;
    console.log(this.status);*/

     this.api.login(loginusers);


  }

  register()
  {
    this.registerme=!this.registerme;
    this.savebtn=!this.savebtn;


  }
  save()
  {
    var loginusers= {
      username:this.userName,
      empcode:this.empcode,
      password:this.passWord
    }
    this.api.register(loginusers);
    this.register();

  }
}
