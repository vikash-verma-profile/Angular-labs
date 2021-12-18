import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.registerview.html',
})
export class RegisterComponent {
  registerUserData: User = new User();

  constructor(private _auth: AuthService, private _router: Router) {}

  registerUser() {
    this._auth.registerUser(this.registerUser).subscribe(
      (res) => {
        //console.log(res.token);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/events']);
      },
      (err) => console.log(err)
    );
  }
}
