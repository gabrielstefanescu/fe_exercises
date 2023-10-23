import { Injectable } from '@angular/core';
import { Bird } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class BirdService {
    private _animal2: Bird[] = [];
    get animal2(): Bird[] {
    return this._animal2;
  }
  addBird(animal2: Bird) {
        this._animal2.push(animal2);
      }
}
