import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  pages: any = [];

display=false;
  constructor(private api:ApiServiceService  ) { }

  ngOnInit(): void {
    this.getpages( );
this.api.checkuserlogin();
 this.display=this.api.special;


  }
  getpages( )
  {
    this.api.getapipages( ).subscribe((data:any)=>{
      this.pages=data;

    }) ;

  }
  screens(e:any)
  {
    console.log(e);
  }


}
