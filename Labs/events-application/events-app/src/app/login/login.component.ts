import { Component } from '@angular/core';
import { User } from './login.model';

@Component({
    selector:'app-login',
    templateUrl:'./login.loginview.html',
})
export class LoginComponent {
 LoginUser:User=new User();
}
