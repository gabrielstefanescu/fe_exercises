import { Component, OnInit } from '@angular/core';
import { Bird } from '../classes';
import { BirdService } from './bird.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  //styleUrls: ['./classes.component.css']
})
export class BirdComponent implements OnInit {
  animal2: Bird[] = [];

  constructor(private birdService: BirdService) {}

  ngOnInit(): void {
    this.birdService.addBird(new Bird('eagle', 'jump', 'carnivore', 'meat', 'fly', 'feathers'));

    this.animal2 = this.birdService.animal2;
  }
}