import { CommonModule } from '@angular/common';
import {NgModule,} from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import {LoginPageComponent} from "./pages/login/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth/auth.service";
import {SignupPageComponent} from "./pages/signup/signup-page.component";

@NgModule({
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  exports: [],
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  providers: [AuthService]
})

export class AdminModule{}

