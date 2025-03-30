import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';



@NgModule({
  declarations: [],
  imports: [
    AuthenticationRoutingModule
  ],
  exports: [
    FormsModule, CommonModule
  ]
})
export class AuthenticationModule { }
