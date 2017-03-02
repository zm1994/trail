import { Component, OnInit, Input } from '@angular/core'
import { TrailService } from '../services/trail.service'


@Component({
  selector: 'header-comp',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() withSearchForm: boolean;
  searchFormIsShown: boolean;
  device: any;

  constructor(private trailServ: TrailService) {
  }

  ngOnInit() {
    this.device = window;
    // if device is desctop search input is shown default else it is hidden
    console.log(this.device)
    // this.searchFormIsShown = window.innerWidth > 992;
  }


  showSearchForm() {
    this.searchFormIsShown = true;
  }

  authentificate() {
    this.trailServ.authentificate()
      .subscribe(res => console.log(res),
                  err => console.log(err))
  }
}
