export class Timesheetclass {

  public empname:string;
  public empcode:string;
  public hours:number;

  public tleavetype:string;
  public customdate:Date;
  public comments:string;
  public updatedby:any;
  public onleave:any;

  constructor(empname:string,empcode:string,hours:number, tleavetype:string,customdate:Date,comments:string,updateby:any,onleave:any)
  {
    this.empname=empname;
    this.empcode=empcode;
    this.hours=hours;
    this.tleavetype=tleavetype;
    this.customdate=customdate;
    this.comments=comments;
    this.updatedby=updateby;
    this.onleave=onleave;

  }
}
