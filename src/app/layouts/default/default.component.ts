import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
sidebaropen=false;

  constructor( private api:ApiServiceService,private r:Router) { }

  ngOnInit(): void {
this.api.checkuserlogin();
if(!this.api.loginstatus){
this.r.navigateByUrl("/login");

  }

  }

sidebarToggler()
{

  this.sidebaropen=!this.sidebaropen;
}

}
