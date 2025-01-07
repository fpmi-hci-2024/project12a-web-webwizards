import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontRoutingModule } from './storefront-routing.module';
import { StorefrontComponent } from './storefront.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RegistrationComponent } from '../../../../shared/components/registration/registration.component';
import { LoginComponent } from '../../../../shared/components/login/login.component';

@NgModule({
  declarations: [
    StorefrontComponent
  ],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    DialogModule,
    InputTextModule,
    RegistrationComponent,
    LoginComponent
  ]
})
export class StorefrontModule { }
