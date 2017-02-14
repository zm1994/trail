import { Component } from '@angular/core';
import { SearchDirection } from './models/search-direction.model'
import { AirportsRouteService } from './services/airports-route.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';

 
  

  constructor(private airportServ: AirportsRouteService){}

  onSearchRoute(event: SearchDirection) {
      if(!!event.arrival_code) {
        // this.airportServ.searchDirectionsWithTransfers(event)
      }
  }

}
