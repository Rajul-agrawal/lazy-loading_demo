import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [LoginComponent]
})
export class SignupModule { }
