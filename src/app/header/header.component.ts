import { Component, OnInit, Input } from '@angular/core'
// import { TrailService } from '../../services/trail.service'


@Component({
  selector: 'header-comp',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() withSearchForm: boolean;
  searchFormIsShown: boolean;
  device: any;

  constructor() {
    // this.window = new Window();
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


}
