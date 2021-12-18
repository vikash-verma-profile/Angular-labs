import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let _authService = this.injector.get(AuthService);
    let TokeizedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'bearer' + _authService.getToken()
      ),
    });
    return next.handle(TokeizedReq);
  }
}
