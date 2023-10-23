import { Injectable } from '@angular/core';
import { Car } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private _cars: Car[] = [];
  get cars(): Car[] {
    return this._cars;
  }
  addCar(car: Car) {
    this._cars.push(car);
  }
}
