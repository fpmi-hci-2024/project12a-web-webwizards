import { Component } from '@angular/core';
import { RegistrationComponent } from '../../../../shared/components/registration/registration.component';
import { LoginComponent } from '../../../../shared/components/login/login.component';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})
export class StorefrontComponent {
  showRegistration: boolean = false;
  showLogin: boolean = false;

  openRegistration() {
    this.showLogin = false;
    this.showRegistration = true;
  }

  closeRegistration() {
    this.showRegistration = false;
  }

  openLogin() {
    this.showRegistration = false;
    this.showLogin = true;
  }

  closeLogin() {
    this.showLogin = false;
  }
}
