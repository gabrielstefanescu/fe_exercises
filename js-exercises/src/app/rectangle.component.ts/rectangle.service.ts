import { Injectable } from '@angular/core';
import { Rectangle } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class RectangleService {
  private _rectangle: Rectangle[] = [];
    get rectangle(): Rectangle[] {
    return this._rectangle;
  }
  addRectangle(rectangle: Rectangle) {
    this._rectangle.push(rectangle);
  }
}
  