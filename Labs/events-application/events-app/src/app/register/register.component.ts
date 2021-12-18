import { Component } from '@angular/core';
import { User } from './register.model';

@Component({
    selector:'app-register',
    templateUrl:'./register.registerview.html'
})
export class RegisterComponent {
  registerUserData:User=new User();
}
