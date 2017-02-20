import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { TrailService } from '../services/trail.service'
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})

export class SearchComponent implements OnInit {
    @ViewChild('searchInput')
    searchInput: ElementRef;
    inputValue: string;
    searchVarians: any[]

    constructor(private trailServ: TrailService) {
        this.searchVarians = []
    }

    ngOnInit() {
        // const eventStream = Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
        //     .map(() => this.inputValue)
        //     .debounceTime(200)
        //     .distinctUntilChanged();

        // eventStream.subscribe(input => {
        //     console.log(input)
        //     if (!input)
        //         this.searchVarians = []
        //     else {
        //         this.trailServ.searchTrails(input).subscribe((res) => {
        //             this.searchVarians = res
        //             console.log(res)
        //         }, (err) => console.log(err))
        //     }
        // });
    }
}