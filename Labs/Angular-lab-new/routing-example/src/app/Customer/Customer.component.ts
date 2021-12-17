import { Component,Injector } from '@angular/core';
import { BaseLogger } from '../Utility/Utility.Logger';
import { Customer } from './Cutomer.CustomerModel';

@Component({
  templateUrl: './Customer.CustomerView.html'
})
export class CustomerComponent {
  LogObj:BaseLogger;
  CustomerModel:Customer=new Customer();

  constructor(_injector:Injector){
    this.LogObj=_injector.get("2");
    this.LogObj.Log();
  }

  AddCustomer(){
    console.log(this.CustomerModel);
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
      return this.CustomerModel.formCustomerGroup.controls[controlname].
      hasError(typeofvalidator);
  }
}
