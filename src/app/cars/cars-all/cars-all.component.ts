import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-all',
  templateUrl: './cars-all.component.html',
  styleUrls: ['./cars-all.component.css']
})
export class CarsAllComponent implements OnInit {

  cars$: Observable<Array<Car>>; 

  constructor(private carService: CarsService) { } 

  ngOnInit() { 
    this.cars$ = this.carService.getAllCars(); 
    console.log(this.cars$); 
  }

}
