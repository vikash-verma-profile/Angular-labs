import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/MainRouting';
import { HomeComponent } from './Home.HomeComponent';
import { MasterComponent } from './Home.MasterComponent';



@NgModule({
  declarations: [
   HomeComponent,
   MasterComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MainModule { }
