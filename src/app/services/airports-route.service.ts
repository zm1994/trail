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

    searchAvailableDirections(departure_code: string) {
        // let body = { departure_code:  departure_code.toLowerCase()}
        return this.http.get('/api/availdirections/'+ departure_code.toLowerCase())
            .map((res) => {
                return res.json()
            })
            .catch((error) => Observable.throw(error.json() || 'Server error'))

    }

    searchDirectionsWithTransfers(direction: SearchDirection) {

    }
}
