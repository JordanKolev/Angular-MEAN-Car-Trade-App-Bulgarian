import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  form: FormGroup; 

  constructor(private formBuilder: FormBuilder, private carService: CarsService, private router: Router) { }

  ngOnInit() { 
    this.form = this.formBuilder.group({
      make: ['', [Validators.required, Validators.minLength(3)]], 
      model: ['', [Validators.required]],    
      year: ['', [Validators.required, Validators.max(2005)]], 
      description: ['', [Validators.required, Validators.minLength(10)]], 
      price: ['', [Validators.required]],  
      image: ['', [Validators.required]],  
      material: ['', [Validators.required]], 
    })
  } 

  createCar() {
    this.carService.addCar(this.form.value).subscribe(data => { 
      console.log(this.form); 
      this.router.navigate(['/cars/all']); 
    })
  } 

  get f() {
    return this.form.controls; 
  } 

  get invalid() {
    return this.form.invalid; 
  }

}
