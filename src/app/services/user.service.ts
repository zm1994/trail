import * as CryptoJS from 'crypto-js';
import { Component, Injectable } from '@angular/core'
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { UserRole } from '../models/user_role.model'

@Component({
  selector: 'user_service'
})

@Injectable()
export class UserService {

  constructor() {}

  private get tokenUserRole() {
    return Cookie.get('user_token')
  }

  get userRole() {
    if(this.tokenUserRole) {
      var crypt = CryptoJS.AES.decrypt(this.tokenUserRole.toString(), 'facebook')
      var plaintext = crypt.toString(CryptoJS.enc.Utf8);
      return UserRole[plaintext];
    }
    else return '';
  }

  userIsLogged() {
    return !!this.tokenUserRole;
  }
}
