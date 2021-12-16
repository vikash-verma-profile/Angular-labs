import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/SupplierRoutes';
import { SupplierComponent } from './Supplier.Component';


@NgModule({
  declarations: [
   SupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SupplierRoutes),
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
