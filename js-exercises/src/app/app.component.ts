import { Component, OnInit } from '@angular/core';
//import { Car } from './Classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'js-exercises';

  // car = new Car('caca', 'maca', 5);

  ngOnInit() {
    // console.log('caca');
    // this.car.Information();
  }
}
