import { Time } from "@angular/common";


export class Tables {
private Table_id:any;
private Table_Feature:string;
private Table_Booking_Date:string;
private Table_Booking_time:Time;
private Table_Status:string;
private Table_Allocated_To:string;
private no_of_seats:number;

constructor(Table_id:any,Table_Feature:string,Table_Status:string,Table_Allocated_to:string,no_of_seats:number,Table_Booking_Date:string,Table_Booking_time:Time)
{
  this.Table_id=Table_id;
  this.Table_Feature=Table_Feature;
  this.Table_Status=Table_Status;
  this.Table_Allocated_To=Table_Allocated_to;
  this.no_of_seats=no_of_seats;
  this.Table_Booking_Date=Table_Booking_Date;
  this.Table_Booking_time=Table_Booking_time;
}


}
