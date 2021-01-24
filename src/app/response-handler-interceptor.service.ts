import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service'; 
import { catchError, tap } from 'rxjs/operators';  
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {

  constructor(public toastr: ToastrService) { } 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success) => { 
      if (success instanceof HttpResponse) 
        if (success.url.includes('login') || success.url.includes('register') || success.url.includes('create') || success.url.endsWith('delete')) { 
          // this.toastr.success('Success');   
        } 
      
    }), catchError(err => { 
      console.log(err); 
      this.toastr.error(err.error.message);  
      throw err; 
    })
    )}; 

}
