import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiServiceService as api} from './api-service.service';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HolidaysComponent } from './modules/holidays/holidays.component';
import { IncidentsComponent } from './modules/incidents/incidents.component';
import { NewemployComponent } from './modules/newemploy/newemploy.component';
import { PosComponent } from './modules/pos/pos.component';

import { PostsComponent } from './modules/posts/posts.component';
import { TimesheetComponent } from './modules/timesheet/timesheet.component';

const routes: Routes = [

  { path:'login',component:LoginComponent},

  { path:'default',component:DefaultComponent,
  children:[

    { path:'dash',component:DashboardComponent, },
    {path:'create',component:NewemployComponent},
    {path:'holidays',component:HolidaysComponent},
    {path:'timesheet',component:TimesheetComponent},
    {path:'incidents',component:IncidentsComponent},
    {path:'pos',component:PosComponent}


  ]
},
//{path:'**',redirectTo:'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  /*childs:any=[];
  constructor(private api:ApiServiceService){}
  ngOnInit():void
  {

    this.api.getchilds().subscribe((data: any)=>{
    this.childs=data;
  console.log(data);
  console.log("childs"+this.childs);
});
    routes.unshift({path:"default",component:DefaultComponent,children:this.childs});
  }*/
}
