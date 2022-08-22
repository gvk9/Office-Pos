import { Component, OnInit, Output ,EventEmitter,  } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterState } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() togglesidebarme: EventEmitter <any>=new EventEmitter();

  constructor(private r:Router,private api:ApiServiceService ) { }

user: any;
  ngOnInit(): void {
   this.api.checkuserlogin();
   this.user=this.api.username;
  }
  togglesidebar()
  {this.togglesidebarme.emit();

  }
  logout()
  {

    localStorage.removeItem('username' );
    this.api.loginstatus=false;
    window.location.reload();
    this.r.navigateByUrl("/login");

  }

}
