import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-user',
  templateUrl: './car-user.component.html',
  styleUrls: ['./car-user.component.css']
})
export class CarUserComponent implements OnInit {

  userCar$: Observable<Array<Car>>;
  car: Car;

  constructor(private carService: CarsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userCar$ = this.carService.getUserCars();
  }

  deleteCar(id) { 
    this.carService.deleteC(id).subscribe(data => {
      console.log('delete', data); 
      this.userCar$ = this.carService.getUserCars();
    })

  }

}
