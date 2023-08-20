import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthSectionLayoutComponent } from './layouts/auth-section-layout/auth-section-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '@ui';

@NgModule({
  declarations: [
    AuthComponent,
    GetStartedComponent,
    SignInComponent,
    SignUpComponent,
    AuthSectionLayoutComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, AuthRoutingModule, InputModule],
})
export class AuthModule {}
