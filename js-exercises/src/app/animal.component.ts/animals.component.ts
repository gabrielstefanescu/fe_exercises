import { Component, OnInit } from '@angular/core';
import { Animal } from '../classes';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  //styleUrls: ['./classes.component.css'],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.addAnimal(new Animal('tiger', 'run', 'carnivore', 'meat'));

    this.animals = this.animalService.animals;
  }
}
