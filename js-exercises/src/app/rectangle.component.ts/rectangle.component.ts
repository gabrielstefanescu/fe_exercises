import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../classes';
import { RectangleService } from './rectangle.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  //styleUrls: ['./classes.component.css'],
})
export class RectangleComponent implements OnInit {
    rectangle: Rectangle[] = [];

  constructor(private rectangleService: RectangleService) {}

  ngOnInit(): void {
    this.rectangleService.addRectangle(new Rectangle(4, 5));
    this.rectangleService.addRectangle(new Rectangle(6, 7));

    this.rectangle = this.rectangleService.rectangle;
  }
}
