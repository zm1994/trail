import { Component } from '@angular/core';
import { TrailService } from './services/trail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';

  constructor(private trailServ: TrailService) {}

  getTrails() {
    console.log('click')
    this.trailServ.searchTrails('test');
  }

}
