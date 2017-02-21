import {Component, ElementRef, OnInit, ViewChild, TemplateRef} from '@angular/core'
import { SearchVariant } from '../models/search_variant.model'
import { TrailService } from '../services/trail.service'
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})

export class SearchComponent implements OnInit {
    public selected:string;
  @ViewChild('customItemTemplate')
  customItemTemplate: TemplateRef<any>;

    @ViewChild('searchInput')
    searchInput: ElementRef;
    inputValue: string;
    searchVarians: SearchVariant[]

    constructor(private trailServ: TrailService) {
        this.searchVarians = []
    }

    ngOnInit() {
        //set event on input in search field
        const eventStream = Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
            .map(() => this.inputValue)
            .debounceTime(200)  //set delay for input
            .distinctUntilChanged();

        eventStream.subscribe((input) => {
            this.searchVarians = []
            this.trailServ.searchTrails(input).subscribe((res) => {
                res.map((item) => {
                    let variant = <SearchVariant>item
                    //parse type variant route
                    variant.isCountryside = JSON.parse(item.is_countryside)
                    this.searchVarians.push(<SearchVariant>item)
                })
            }, (err) => console.log(err))
        }
        );
    }
}
