import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGaurd implements CanActivate{

    constructor(private _authService:AuthService,private _router:Router){}

    canActivate(): boolean{
        if(this._authService.loggedIn()){
            console.log(true);
            return true;
        }
        else{
            this._router.navigate(['/login']);
            return false;
        }
        
    }
}