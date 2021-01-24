import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service'; 
import { ToastrModule } from 'ngx-toastr'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { JwtInterceptorService } from './jwt-interceptor.service';
import { CarsAllComponent } from './cars/cars-all/cars-all.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarUserComponent } from './cars/car-user/car-user.component';
import { CarsService } from './cars/cars.service';
import { ResponseHandlerInterceptorService } from './response-handler-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective, 
    CollapseDirective, CarsAllComponent, CreateCarComponent, CarDetailsComponent, CarUserComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [ 
    AuthService, 
    CarsService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
