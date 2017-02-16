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
  progress: number;

  constructor(private airportServ: AirportsRouteService) {
    this.progress = 0;
  }

  onSearchRoute(event: SearchDirection) {
    console.log(event)
      if(!event.arrival_code) {
        let timer = setTimeout(this.increaseProgress)
        this.airportServ.searchAvailableDirections(event.departure_code)
          .subscribe((res) => {
            clearTimeout(timer)
            this.progress = 0;
            console.log(res)
          },
                      (err) => console.log(err))
      }
  }

  increaseProgress() {
        this.progress += 10;
    }

}
