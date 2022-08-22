
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { Users } from 'src/app/users';




// CommonJS

@Component({
  selector: 'app-newemploy',
  templateUrl: './newemploy.component.html',
  styleUrls: ['./newemploy.component.scss']
})
export class NewemployComponent implements OnInit {


  constructor(private fb:FormBuilder,private api:ApiServiceService) { }
  formdatas: any = [];
  empform=true;
  tabs="active";
  tabs2="inactive"
  getemps=false;
  aid: any;
 edits=false;
 shortLink: string = "";
    loading: boolean = false; // Flag variable

statelist:any=[];
@Input() user:Users=({'empname':'','empcode':'','profilepic':'','empphone':'','empdept':'','empdesig':'',
              'empjoindate':new Date(),'empgender':'' ,'empbasicamount':0,
              'address':'','city':'','state':'','zip':'',createdby:'',creationdate:'',lastmodifiedby:'',lastmodifieddate:''});
  ngOnInit(): void {
 this.api.getstates().subscribe((data:any)=>{this.statelist=data;});
  }



  profileForm=this.fb.group({
    empname:['', [Validators.required]],
    empcode:['',[Validators.required]],
    empphone:['',[Validators.required]],
    profilepic:[''],
    empdept:['',[Validators.required]],
    empdesig:['',[Validators.required]],
     empjoindate:['',[Validators.required]],
    empgender:['',[Validators.required]],
     empbasicamount:[''],
     address:['',[Validators.required]],
     state:['',[Validators.required]],
     city:['',[Validators.required]],
     zip:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],

  });
 showform()
 {

   this.empform=true;
   this.getemps=false;
   this.tabs="active";
  this.tabs2="inactive"

 }
 refresh()
 {
  this.formdatas= [];
   this.getapi();
 }
 //CREATE EMPLOY
  onsubmit()
  {

 /*var user=new Users(
    this.profileForm.controls['empname'].value,
    this.profileForm.controls['empcode'].value,
     this.profileForm.controls['empdept'].value,
     this.profileForm.controls['empdesig'].value,
     this.profileForm.controls['empjoindate'].value,
    this.profileForm.controls['empgender'].value,
       this.profileForm.controls['empbasicamount'].value,
       this.profileForm.controls['address'].value,
       this.profileForm.controls['city'].value,
       this.profileForm.controls['state'].value,
       this.profileForm.controls['zip'].value,
       '','','',''
    );*/
    if(this.edits==false)
    {
      this.api.postapiData(this.user);
      console.log(this.user.profilepic);
    }
    else
    {
      if(window.confirm("Do you want to Update User - " +this.user.empname +" ?"))
      this.api.update(this.user);
    }
    this.getapi();
  }

  getapi()
  {
    console.log("Get Request");
   //this.aa=this.api.getapidata();
  this.api.getapidata().subscribe((data:any)=>{this.formdatas=data;}) ;

   //this.profileForm.controls.name.setValue=this.formdatas.empname;
  this.tabs="inactive";
   this.tabs2="active"
   this.empform=false;
   this.getemps=true;

  }

  del(i:any)
  {
     this.api.delemp(i.empcode);
  this.getapi();
  }


  edit(i:any)
  {
    this.aid=i;
    this.user.empname=i.empname;
    this.user.empcode=i.empcode;
    this.user.empphone=i.empphone;
    this.user.empdept=i.empdept;
    this.user.empdesig=i.empdesig;
    this.user.empjoindate=i.empjoindate;
    this.user.empgender=i.empgender;
    this.user.empbasicamount=i.empbasicamount;
    this.user.address=i.address;
    this.user.city=i.city;
    this.user.state=i.state;
    this.user.zip=i.zip;
    this.user.lastmodifiedby='';
    this.user.lastmodifieddate='';
    this.edits=true;
    this.showform();
  }


}
