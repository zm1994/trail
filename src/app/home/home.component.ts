import { Component, OnInit } from '@angular/core'
import {Md5} from 'ts-md5/dist/md5';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})


export class HomeComponent {
    private numberBackgroundImage: number;

    constructor(private md5: Md5) {
      //get random background image
        this.numberBackgroundImage = Math.floor(Math.random() * 3) + 1
    }
<<<<<<< HEAD


    ngOnInit() {
      console.log(Md5.hashStr('email password'))

    }

=======
>>>>>>> c2093b82f7cdef0fd1906a75266c11bbab65121f
}
