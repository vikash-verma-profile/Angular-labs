import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  is_loggedIn=false;

  constructor(private _authservice:AuthService){
    this.is_loggedIn=!this._authservice.loggedIn();
  }
  

  logout(){
    console.log('Hi');
    this._authservice.logoutUser();
  }

}


