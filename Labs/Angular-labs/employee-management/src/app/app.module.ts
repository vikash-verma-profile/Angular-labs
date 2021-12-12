import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { MainRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './empolyee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
