import { Injectable } from '@angular/core'
import {SignInModel} from "../../models/SignInModel"
import {SignUpModel} from "../../models/SignUpModel"
import {AuthUser} from "../../models/AuthUser"
import {Strings} from "../../data/Strings"
@Injectable()
export class AuthService {

  constructor() { }

  signIn(model: SignInModel) {
    // Make http api call
    localStorage.setItem(Strings.isAuthenticated, "true")
    localStorage.setItem(Strings.authenticatedUsername, model.username as string)
    localStorage.setItem(Strings.authenticatedUsername, model.password as string)
    localStorage.setItem(Strings.authenticatedUserJwtToken, "")
  }
  signUp(model: SignUpModel) {}

  logout() {
    localStorage.removeItem(Strings.isAuthenticated)
    localStorage.removeItem(Strings.authenticatedUsername)
    localStorage.removeItem(Strings.authenticatedPassword)
    localStorage.removeItem(Strings.authenticatedUserJwtToken)
  }

  authenticatedUser(): AuthUser | null {
    if (!this.isAuthenticated()) return null
    return {
      username: localStorage.getItem(Strings.authenticatedUsername)!!,
      firstname: localStorage.getItem(Strings.authenticatedUserFirstname)!!,
      lastnames: localStorage.getItem(Strings.authenticatedUserLastnames)!!,
    }
  }
  isAuthenticated(): Boolean {
    let status = localStorage.getItem(Strings.isAuthenticated)
    return status === "true"
  }
}
