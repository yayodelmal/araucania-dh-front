import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],  // Asegúrate de incluir FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async login(): Promise<void> {
    try {
      const response = await this.authService.login(this.email, this.password);
      this.authService.setToken(response.token);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed');
    }
  }
}
