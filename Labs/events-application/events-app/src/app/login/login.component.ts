import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './login.model';

@Component({
    selector:'app-login',
    templateUrl:'./login.loginview.html',
})
export class LoginComponent {
 LoginUser:User=new User();
 constructor(private _auth:AuthService,private _router:Router) {}
 loginUser(){
     this._auth.loginUser(this.LoginUser).subscribe(res=>{
        localStorage.setItem('token',res.token);
        this._router.navigate(['/special']);
     },
     err=>console.log(err))
 }
}
