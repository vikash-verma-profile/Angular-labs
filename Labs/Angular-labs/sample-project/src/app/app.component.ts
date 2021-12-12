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
}
