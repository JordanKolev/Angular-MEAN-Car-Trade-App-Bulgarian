import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: Car; 

  constructor(private activatedRoute: ActivatedRoute, private carService: CarsService) { }

  ngOnInit() { 
    this.activatedRoute.params.subscribe(data => {
      let id = data['id']; 
      this.carService.getCar(id).subscribe(data => { 
        this.car = data; 
      }) 
    })
  }

}
