import { Component } from '@angular/core';
import { Customer } from './Customer.Model';

@Component({
  templateUrl: './Customer.CustomerView.html'
})
export class CustomerComponent {
  title = 'sample-project';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();

  //added add method to add customer
  Add(){
    //console.log(this.CustomerModel);

    this.CustomerModels.push(this.CustomerModel);

    console.log(this.CustomerModels);
    this.CustomerModel=new Customer();
  }
  EditCustomer(input:Customer){
    this.CustomerModel=input;
  }
  DeleteCustomer(input:Customer){
    this.CustomerModels=this.CustomerModels.filter(x=>x!=input);
  }

}
