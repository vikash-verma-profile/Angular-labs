import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { CustomerComponent } from './Customer/Customer.CustomerComponent';
import { HomeComponent } from './Home/Home.HomeComponent';
import { MasterComponent } from './Home/Home.MasterComponent';
import { MainRoutes } from './Routing/MainRouting';
import { SupplierComponent } from './Supplier/Supplier.SupplierComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    MasterComponent,
    HomeComponent,
    SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
