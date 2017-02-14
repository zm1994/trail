import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SearchDirection } from '../models/search-direction.model'

@Component({
    selector: 'search-form',
    templateUrl: 'search-form.component.html',
    styleUrls: ['search-form.component.css'],
})

export class SearchFormComponent implements OnInit {
    @Output()
    searchRouteEmitter: EventEmitter<SearchDirection>;
    formRoute: FormGroup;

    constructor(private builder: FormBuilder){
            this.searchRouteEmitter = new EventEmitter<SearchDirection>();
        }

    ngOnInit() {
        this.formRoute = this.builder.group({
            departure_code: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3)])],
            arrival_code: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(3)])]
        })
    }

    searchRoute() {
        if(this.formRoute.valid) {
            console.log('test')

            this.searchRouteEmitter.emit(
                new SearchDirection(this.formRoute.controls['departure_code'].value,
                                    this.formRoute.controls['arrival_code'].value))
        }
        else {
          console.log('invalid')
        }
    }

  checkInput(event: KeyboardEvent ) {
      //allow only [A-Z a-z]
      if((event.keyCode <= 65 || event.keyCode >= 90) &&
         (event.keyCode <= 97 || event.keyCode >= 122)) {
        event.preventDefault();
      }
  }
}
