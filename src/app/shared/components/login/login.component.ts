import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ]
})
export class LoginComponent {
  @Input() visible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() switchToRegistration = new EventEmitter<void>();

  onHide() {
    this.closeDialog.emit();
  }

  login() {
    // Здесь будет логика входа
    this.onHide();
  }

  openRegistration() {
    this.onHide();
    this.switchToRegistration.emit();
  }
} 