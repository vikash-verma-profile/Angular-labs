import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user: any) {
      var _user:any=[];
      _user.email=user.email;
      _user.password=user.password;

    return this.http.post<any>(this._registerUrl, _user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
