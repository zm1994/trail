import { Component,OnInit } from '@angular/core'
import { UserService } from '../services/user.service'
import { UserRole } from '../models/user_role.model'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})


export class HomeComponent implements OnInit{
  private numberBackgroundImage: number;

  constructor(private userServ: UserService) {
    //get random background image
    this.numberBackgroundImage = Math.floor(Math.random() * 3) + 1
  }

  ngOnInit() {
    let role: UserRole = this.userServ.userRole;
    console.log(role)
  }
}
