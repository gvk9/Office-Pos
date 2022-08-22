import { Component, OnInit  } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Tables } from 'src/app/tables';
import { FormBuilder,   Validators } from '@angular/forms';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit  {
  minDate: Date;
  maxDate: Date;
  date:any;
  constructor(private api:ApiServiceService,private fb:FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

  table_view:boolean=true;

  Table_List:any=[{"Table_id":"Table 1","Table_Status":"Billing","no_of_seats":4,"Table_Feature":"AC Dine In","Table_Booking_Date":'20/08/2022',"Table_Booking_Time":'02:00 am',"table":true},{"Table_id":"Table 1","Table_Status":"Empty","no_of_seats":4,"Table_Booking_Date":'20/08/2022',"Table_Booking_Time":'02:00 am',"table":false},{"Table_id":"Table 1","Table_Status":"Empty","no_of_seats":4,"Table_Booking_Date":'20/08/2022',"Table_Booking_Time":'02:00 am',"table":true}];
  Table_Features_List:any=[{"Table_Features":"Dine In"},{"Table_Features":"AC Tables"},{"Table_Features":"Hotel"},{"Table_Features":"Delivery"},{"Table_Features":"Take Away"}];
  ngOnInit(): void {

  }

filter(Table_Feature:string,Tables?:Tables)
{

 /* this.api.get .subscribe((data:any)=>{
    this.Table_List=data;

  }) ;*/
}
Reserve()
{

}
Cancel_booking()
{

}
Add_waitingList()
{

}

  open(i?:any)
  {
    i.table=!i.table;

   // Swal.fire("clicked","","info");
  }
  Save(){}
  Clear(){}

}
