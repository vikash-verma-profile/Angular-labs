import { Component } from '@angular/core';
import { Customer } from './app.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();

  //added add method to add customer
  Add(){
    //console.log(this.CustomerModel);
    this.CustomerModels.push(this.CustomerModel);
    console.log(this.CustomerModels);
  }

}
