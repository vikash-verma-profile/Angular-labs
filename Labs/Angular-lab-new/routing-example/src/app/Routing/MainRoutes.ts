import { NgModule } from '@angular/core';
import { HomeComponent } from '../Home/Home.HomeComponent';

export const MainRoutes = [
  //localhost:4200/
  { path: '', component: HomeComponent },
  //localhost:4200/Home
  { path: 'Home', component: HomeComponent },
  //localhost:4200/Customer/Add
  { path: 'Customer', loadChildren:()=>import('../Customer/Customer.CustomerModule').
  then(m=>m.CustomerModule)},
  //localhost:4200/Supplier/Add
  {
    path: 'Supplier',
    loadChildren:()=>import('../Supplier/Supplier.SupplierModule').then(m=>m.SupplierModule)
  }
];

