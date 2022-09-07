import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";


@Component({
  selector: 'admin-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public usernameControl: FormControl
  public passwordControl: FormControl

  constructor(private authService: AuthService) {
    this.usernameControl = new FormControl(null, [Validators.required, Validators.min(3)])
    this.passwordControl = new FormControl(null, [Validators.required, Validators.min(8)])
  }

  login() {

    if (this.usernameControl.valid && this.passwordControl.valid) {
      let username = this.usernameControl.value
      let password = this.passwordControl.value

      this.authService.signIn({username, password})
    }
  }
}
