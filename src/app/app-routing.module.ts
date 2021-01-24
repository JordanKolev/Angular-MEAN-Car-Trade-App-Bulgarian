import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { CarsAllComponent } from './cars/cars-all/cars-all.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarUserComponent } from './cars/car-user/car-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }, 
  { path: 'car/create', component: CreateCarComponent, canActivate: [AuthGuard] },  
  { path: 'cars/all', component: CarsAllComponent, canActivate: [AuthGuard] }, 
  { path: 'cars/details/:id', component: CarDetailsComponent, canActivate: [AuthGuard] }, 
  { path: 'cars/user', component: CarUserComponent, canActivate: [AuthGuard] }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }