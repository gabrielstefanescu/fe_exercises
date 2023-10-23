import { Injectable } from '@angular/core';
import { Animal } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private _animals: Animal[] = [];
  get animals(): Animal[] {
    return this._animals;
  }
  addAnimal(animals: Animal) {
    this._animals.push(animals);
  }
}
  