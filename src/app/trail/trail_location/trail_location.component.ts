import { Component, Input } from '@angular/core'

@Component({
  selector: 'trail-location',
  templateUrl: 'trail_location.component.html',
  styleUrls: ['trail_location.component.css']
})

export class TrailLocationComponent {
  @Input() lat: number;
  @Input() lng: number;
}
