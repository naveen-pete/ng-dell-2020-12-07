import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('AuthInterceptor.intercept() invoked.');

    return this.authService.user.pipe(
      take(1),
      switchMap(user => {
        if (!user) {
          // auth
          return next.handle(request);
        }

        // products
        const modifiedRequest = request.clone({
          params: new HttpParams().set('auth', user.token)
          // headers: new HttpHeaders().set('x-auth', user.token)
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
