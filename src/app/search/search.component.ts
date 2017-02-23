import {Component, ElementRef, OnInit, ViewChild, TemplateRef} from '@angular/core'
import { Router } from '@angular/router'
import { SearchVariant } from '../models/search_variant.model'
import { TrailService } from '../services/trail.service'
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})

export class SearchComponent implements OnInit {
    @ViewChild('searchInput')
    private searchInput: ElementRef;
    private inputValue: string;
    private searchVarians: SearchVariant[];

    constructor(
        private trailServ: TrailService,
        private router: Router) {
        this.searchVarians = []
    }

    ngOnInit() {
        //set event on input in search field
        const eventStream = Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
            .map(() => this.inputValue)
            .debounceTime(200)  //set delay for input
            .distinctUntilChanged();

        eventStream.subscribe((input) => {
            if(!!input)
                this.trailServ.searchTrails(input, true).subscribe((res) => {
                  this.searchVarians = <SearchVariant[]>res
                }, (err) => console.log(err))
            else this.searchVarians = []
        });
    }

    private onSelectVariant(item: SearchVariant) {
       console.log(item)
       if(item.is_trail) this.router.navigate(['/trail', item.id])
    }
}
