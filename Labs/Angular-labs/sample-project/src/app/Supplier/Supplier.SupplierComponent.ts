import { Component } from '@angular/core';
import { Supplier } from './Supplier.Model';

@Component({
  templateUrl: './Supplier.SupplierView.html'
})
export class SupplierComponent {
  title = 'sample-project';
  SupplierModel:Supplier=new Supplier();
  SupplierModels:Array<Supplier>=new Array<Supplier>();

  //added add method to add customer
  Add(){
    //console.log(this.CustomerModel);

    this.SupplierModels.push(this.SupplierModel);

    console.log(this.SupplierModels);
    this.SupplierModel=new Supplier();
  }
  EditCustomer(input:Supplier){
    this.SupplierModel=input;
  }
  DeleteCustomer(input:Supplier){
    this.SupplierModels=this.SupplierModels.filter(x=>x!=input);
  }

}
