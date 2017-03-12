import { Component, Input } from '@angular/core'
import { Trail } from '../../models/trail.model'

@Component({
  selector: 'main-info',
  templateUrl: 'main_info.component.html',
  styleUrls: ['main_info.component.css']
})

export class MainInfoComponent {
  @Input() trail: Trail;
}
