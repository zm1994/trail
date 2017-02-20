import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})


export class HomeComponent implements OnInit {
    numberBackgroundImage: Number;

    constructor() {
      //get random background image
        this.numberBackgroundImage = Math.floor(Math.random() * 3) + 1
    }


    ngOnInit() {

    }

}
