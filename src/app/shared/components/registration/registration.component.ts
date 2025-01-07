import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ]
})
export class RegistrationComponent {
  @Input() visible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  onHide() {
    this.closeDialog.emit();
  }

  register() {
    // Здесь должна быть логика регистрации пользователя
    this.onHide();
  }

  openLogin() {
    this.onHide();
    this.switchToLogin.emit();
  }
} 