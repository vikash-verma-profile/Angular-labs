import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import  {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { AuthGaurd } from './services/auth.gaurd';
import { EventService } from './services/event.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGaurd,EventService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
