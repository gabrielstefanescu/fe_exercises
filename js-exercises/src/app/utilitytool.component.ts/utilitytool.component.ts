import { Component, OnInit } from '@angular/core';
import { UtilityTool } from '../classes';
import { UtilityToolService } from './utilitytool.service';

@Component({
  selector: 'app-utilitytool',
  templateUrl: './utilitytool.component.html',
  //styleUrls: ['./classes.component.css'],
})
export class UtilityToolComponent implements OnInit {
    results: UtilityTool[] = [];

  constructor(private utilityToolService: UtilityToolService) {}

  ngOnInit(): void {
    this.utilityToolService.addUtilityTool(UtilityTool.add(10, 20));
    this.utilityToolService.addUtilityTool(UtilityTool.subtract(40, 25));
    this.utilityToolService.addUtilityTool(UtilityTool.divide(100, 20));
    this.utilityToolService.addUtilityTool(UtilityTool.compare(40, 20));

    this.results = this.utilityToolService.results;
    }
}
