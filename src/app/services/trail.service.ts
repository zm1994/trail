import { Component, Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
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
        let params: URLSearchParams = new URLSearchParams();
        params.set('param', name)
        return this.http.get('/api/search/', { search: params })
            .map((res) => {
                return res.json()
            })
            .catch((error) => Observable.throw(error.json() || 'Server error'))
    }
}
