import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/SupplierRoutes';
import { GridComponent } from '../Utility/Utility.GridComponent';
import { GridUIModule } from '../Utility/Utility.GridModule';
import { SupplierComponent } from './Supplier.Component';


@NgModule({
  declarations: [
   SupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SupplierRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridUIModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
