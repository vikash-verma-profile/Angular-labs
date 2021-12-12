import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerRouting';
import { CustomerComponent } from './Customer.CustomerComponent';

@NgModule({
  declarations: [
   CustomerComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
