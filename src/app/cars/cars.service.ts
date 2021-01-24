import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

const createCar = 'http://localhost:5000/furniture/create'; 
const getAllCars = 'http://localhost:5000/furniture/all'; 
const getSingleCar = 'http://localhost:5000/furniture/details/';  
const getUserCars = 'http://localhost:5000/furniture/user'; 
const deleteCar = 'http://localhost:5000/furniture/delete/'; 

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { } 

  addCar(data) {
    return this.http.post(createCar, data); 
  } 

  getAllCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(getAllCars); 
  } 

  getCar(id): Observable<Car> {
    return this.http.get<Car>(getSingleCar + id); 
  } 

  getUserCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(getUserCars); 
  } 

  deleteC(id) {
    return this.http.delete(deleteCar + id);  
  }
}
