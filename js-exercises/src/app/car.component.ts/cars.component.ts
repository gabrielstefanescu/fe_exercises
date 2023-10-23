import { Component, OnInit } from '@angular/core';
import { Car } from '../classes';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './cars.component.html',
  //styleUrls: ['./classes.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.addCar(new Car('Porsche', '911 Carrera', 2022));
    this.carService.addCar(new Car('Ferarri', 'SF90 STRADALE', 2023));

    this.cars = this.carService.cars;
  }
}
