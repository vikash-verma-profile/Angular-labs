import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customer/Customer.component';
import { HomeComponent } from './Home/Home.HomeComponent';
import { SupplierComponent } from './Supplier/Supplier.Component';

const routes: Routes = [
  //localhost:4200/
  { path: '', component: HomeComponent },
  //localhost:4200/Home
  { path: 'Home', component: HomeComponent },
  //localhost:4200/Customer
  { path: 'Customer', component: CustomerComponent },
  //localhost:4200/Supplier
  {
    path: 'Supplier',
    component: SupplierComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
