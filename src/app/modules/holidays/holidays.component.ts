import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {

  constructor(private api:ApiServiceService) { }
  holidays: any = [];

  ngOnInit(): void {
    this.api.getapiholidays().subscribe((data:any)=>{
      this.holidays=data;

    }) ;

  }

}
