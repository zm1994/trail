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

    searchTrails(name: string, onlyTrails: boolean = false) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('param', name);
        if (onlyTrails) params.set('complex', 'true')
        return this.http.get('/api/search/', { search: params })
            .map((res) => {
                return res.json()
            })
            .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    getCountries() {
      return this.http.get('/api/countries')
                    .map((res) => res.json())
                    .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    getFeaturedTrails(count: Number, offset: Number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('featured', 'true');
        params.set('offset', offset.toString());
        params.set('count', count.toString())
        return this.http.get('/api/trail/', { search: params })
                    .map((res) => res.json())
                    .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    getCountTrails(isFeatured: Boolean) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('featured', isFeatured.toString());
        return this.http.get('/api/trail/count/', { search: params })
                    .map((res) => res.json())
                    .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    getTrailById(id: number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id.toString());
        return this.http.get('/api/trail/', { search: params })
                    .map((res) => res.json())
                    .catch((error) => Observable.throw(error.json() || 'Server error'))
    }
}
