import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { } 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    let token = this.auth.getToken(); 
    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, 
      }
    }); 
    return next.handle(request);    
  }

}
