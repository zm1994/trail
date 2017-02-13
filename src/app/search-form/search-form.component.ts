import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SearchDirection } from '../models/search-direction.model'

@Component({
    selector: 'search-form',
    templateUrl: 'search-form.component.html',
    styleUrls: ['search-form.component.css'],
    providers: [FormGroup]
})

export class SearchFormComponent implements OnInit {
    @Output()
    searchRouteEmitter: EventEmitter<SearchDirection>;

    constructor(
        private builder: FormBuilder,
        private formRoute: FormGroup ){
            this.searchRouteEmitter = new EventEmitter<SearchDirection>();
        }
    
    ngOnInit() {
        this.formRoute = this.builder.group({
            departure_code: ['', Validators.required],
            arrival_code: ''
        })
    }

    searchRoute() {
        if(this.formRoute.valid) {
            console.log('test')

            this.searchRouteEmitter.emit(
                new SearchDirection(this.formRoute.controls['departure_code'].value,
                                    this.formRoute.controls['arrival_code'].value))
        }
    }
}