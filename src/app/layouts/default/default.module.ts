import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import{MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';


import { NewemployComponent } from 'src/app/modules/newemploy/newemploy.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HolidaysComponent } from 'src/app/modules/holidays/holidays.component';
import { TimesheetComponent } from 'src/app/modules/timesheet/timesheet.component';
import { MatIconModule } from '@angular/material/icon';
import { IncidentsComponent } from 'src/app/modules/incidents/incidents.component';
import { PosComponent } from 'src/app/modules/pos/pos.component';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [ DefaultComponent,
    DashboardComponent,
    PostsComponent,
    NewemployComponent,HolidaysComponent,TimesheetComponent,IncidentsComponent,PosComponent],
  imports: [
MatInputModule,MatDatepickerModule,MatNativeDateModule,
    CommonModule,RouterModule,SharedModule,MatIconModule,MatSidenavModule,MatDividerModule,FlexLayoutModule,MatCardModule,FormsModule,ReactiveFormsModule
  ]
})
export class DefaultModule { }
