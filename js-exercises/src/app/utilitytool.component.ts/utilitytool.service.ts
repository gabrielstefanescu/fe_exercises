import { Injectable } from '@angular/core';
import { UtilityTool } from '../classes';

@Injectable({
  providedIn: 'root',
})
export class UtilityToolService {
  private _results: UtilityTool[] = [];
  get results(): UtilityTool[] {
    return this._results;
  }
  addUtilityTool(results: UtilityTool) {
    this._results.push(results);
  }
}
  