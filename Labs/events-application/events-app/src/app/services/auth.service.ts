import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private _registerUrl = '';
  private _loginUrl = '';

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
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
