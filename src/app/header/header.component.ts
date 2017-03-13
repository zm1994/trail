import { Component, OnInit, Input } from '@angular/core'
import { TrailService } from '../services/trail.service'
import {UserService} from "../services/user.service";


@Component({
  selector: 'header-comp',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() withSearchForm: boolean;
  searchFormIsShown: boolean;
  isLogged: boolean;

  constructor(
    private trailServ: TrailService,
    private userServ: UserService) {
  }

  ngOnInit() {
    console.log(this.userServ.userIsLogged())
    this.isLogged = this.userServ.userIsLogged();
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
