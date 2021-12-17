import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerRoutes';
import { GridComponent } from '../Utility/Utility.GridComponent';
import { GridUIModule } from '../Utility/Utility.GridModule';
import { CustomerComponent } from './Customer.component';


@NgModule({
  declarations: [
   CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridUIModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
