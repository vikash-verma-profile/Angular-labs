import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './Customer/Customer.component';
import { HomeComponent } from './Home/Home.HomeComponent';
import { MasterComponent } from './Home/Home.MasterComponent';
import { SupplierComponent } from './Supplier/Supplier.Component';

@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    CustomerComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
