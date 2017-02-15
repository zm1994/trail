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
    console.log(event)
      if(!event.arrival_code) {
        this.airportServ.searchAvailableDirections(event.departure_code)
          .subscribe((res) => console.log(res),
                      (err) => console.log(err))
      }
  }

}
