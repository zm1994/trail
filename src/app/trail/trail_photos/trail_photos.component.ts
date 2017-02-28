import { Component,Input } from '@angular/core'

@Component({
    selector: 'trail-photos',
    templateUrl: 'trail_photos.component.html',
    styleUrls: ['trail_photos.component.css']
})


export class TrailPhotosComponent {
    @Input() photos: string[];
}
