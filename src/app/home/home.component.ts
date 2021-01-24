import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsService } from '../cars/cars.service';
import { Car } from '../models/Car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : string; 
  cars$: Observable<Array<Car>>; 

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username'); 
    this.cars$ = this.carService.getAllCars(); 
    console.log(this.cars$); 
  }
}
