import { Component, Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'trail_service'
})

@Injectable()
export class TrailService {
    constructor(private http: Http) { }
    
    searchTrails(name: string) {
        let body = {
            search_params: name
        }

        return this.http.get('api/trails/search/test')
            .map((res) => {
                console.log(res.json())
                return res.json()
            })
            .catch((error) => Observable.throw(error.json() || 'Server error'))
    }
}
