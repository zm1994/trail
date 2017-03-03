import * as CryptoJS from 'crypto-js';
import { Component, Injectable } from '@angular/core'
import { Cookie } from 'ng2-cookies/ng2-cookies';

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
    console.log(this.tokenUserRole)
    console.log(CryptoJS.AES.decrypt(this.tokenUserRole, 'facebook'))
    return CryptoJS.AES.decrypt(this.tokenUserRole, 'facebook')
  }
}
