import { HttpClient } from '@angular/common/http';
import { Component,Injector } from '@angular/core';
import { BaseLogger } from '../Utility/Utility.Logger';
import { Customer } from './Cutomer.CustomerModel';

@Component({
  templateUrl: './Customer.CustomerView.html'
})
export class CustomerComponent {
  LogObj:BaseLogger;
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();

  constructor(_injector:Injector,public httpc:HttpClient){
    this.LogObj=_injector.get("2");
    this.LogObj.Log();
  }

  ngOnInit(){
    this.GetCustomerData();
    }
  GetCustomerData(){
    this.httpc.get("http://localhost:3000/Customers").subscribe(res=>this.SuceessGet(res),res=>this.ErrorGet(res));
  }
  SuceessGet(res:any){
   this.CustomerModels=res;
  }
  ErrorGet(res:any){
    console.log(res);
  }
  AddCustomer(){

    var custdto:any={};
    custdto.CustomerCode=this.CustomerModel.CustomerCode;
    custdto.CustomerEmail=this.CustomerModel.CustomerEmail;
    custdto.CustomerName=this.CustomerModel.CustomerName;
    custdto.CustomerAmount=this.CustomerModel.CustomerAmount;

    this.httpc.post("http://localhost:3000/Customers",custdto).subscribe(res=>this.Success(res),res=>this.Error(res))
    //console.log(this.CustomerModel);
  }

  Success(res:any)
  {
    this.GetCustomerData();
  }
  
  Error(res:any)
  {
    console.log(res);
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
      return this.CustomerModel.formCustomerGroup.controls[controlname].
      hasError(typeofvalidator);
  }
}
