import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home.HomeComponent';
import { MasterComponent } from './Home.MasterComponent';
import {MainRoutes} from '../Routing/MainRoutes';
import { BaseLogger, ConsoleLogger, DbLogger } from '../Utility/Utility.Logger';
import {HttpClientModule} from '@angular/common/http';
import { GridUIModule } from '../Utility/Utility.GridModule';
var providerarray:any=[];

providerarray.push({provide:"1",useClass:DbLogger})
providerarray.push({provide:"2",useClass:ConsoleLogger})
providerarray.push({provide:BaseLogger,useClass:ConsoleLogger})
@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [providerarray],
  bootstrap: [MasterComponent]
})
export class MainModule { }
