import { Component, ViewChild } from '@angular/core'
import { SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
    selector: 'gmaps',
    templateUrl: 'gmaps.component.html',
    styleUrls: ['gmaps.component.css']
})

export class GmapsComponent {
    @ViewChild(SebmGoogleMap) gmap: SebmGoogleMap;
    public isCollapsed: boolean = false;

    constructor() {
        
    }

    public collapsed(event: any): void {
        console.log(event);
    }

    public expanded(event: any): void {
        console.log(event);
    }

    
}