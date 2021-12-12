import { Component } from '@angular/core';
import { Customer } from './app.component.model';

@Component({
  selector: 'sample',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerApplication';
  
  CustomerModel:Customer=new Customer();

}
