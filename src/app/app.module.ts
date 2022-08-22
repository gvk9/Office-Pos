import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';

import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StatecityfilterPipe } from './statecityfilter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';







@NgModule({
  declarations: [
    AppComponent, LoginComponent, StatecityfilterPipe,





  ],
  imports: [
    BrowserModule,MatInputModule,MatDatepickerModule,
    AppRoutingModule,DefaultModule,BrowserAnimationsModule,FormsModule,HttpClientModule,MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],

})
export class AppModule { }
