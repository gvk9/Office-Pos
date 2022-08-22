export class Users {

  public empname:string;
  public empcode:string;
  public profilepic:any;
  public empphone:string;
  public empdept:string;
  public empdesig:string;
  public  empjoindate:Date;
  public empgender:string;
  public  empbasicamount:number;
  public address:string;
  public city:string;
  public state:string;
  public zip:string;
  public createdby:string;
  public creationdate:string;
  public lastmodifiedby:string;
  public lastmodifieddate:string;



  constructor( empname: string,empcode: string,profilepic:any,empphone:string,empdept: string,empdesig: any,empjoindate: any,empgender: any,empbasicamount: any
      ,address:string,city:string,state:string,zip:string,createdby:string,creationdate:any,lastmodifiedby:string,lastmodifieddate:any) {
       this.empname=empname;
       this.empcode=empcode;
       this.profilepic=profilepic;
       this.empphone=empphone;
       this.empdept=empdept;
       this.empdesig=empdesig;
       this.empjoindate= empjoindate;
       this.empgender=empgender;
       this.empbasicamount=empbasicamount;
       this.address=address;
       this.city=city;
       this.state=state;
       this.zip=zip;
       this.createdby=createdby;
       this.creationdate=creationdate;
       this.lastmodifiedby=lastmodifiedby;
       this.lastmodifieddate=lastmodifieddate;


      }


}
