import { Injectable } from '@angular/core'
import { SearchDirection } from '../models/search-direction.model'
import { Http } from '@angular/http' 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Airport } from '../models/airport.model'

@Injectable()
export class AirportsRouteService {
    
    constructor(private http: Http){}

    searchAvailableDirections(direction: SearchDirection) {
        return this.http.get('/api/airport/' + direction.departure_code)
            .map((res) => {
                let departure_airport = <Airport> res.json().data;
                let body = JSON.stringify({"departure_id": departure_airport.id_airport})
                this.http.get('/api/availdir/', {body: body})
                    
            })
            .catch((error) => Observable.throw(error.json() || 'Server error'))
        
    }

    searchDirectionsWithTransfers(direction: SearchDirection) {
        
    }
}