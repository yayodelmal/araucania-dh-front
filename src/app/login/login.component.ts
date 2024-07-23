import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Importa Router
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

  constructor(private authService: AuthService, private router: Router) {}  // Inyecta Router

  async login(): Promise<void> {
    try {
      const response = await this.authService.login(this.email, this.password);
      this.authService.setToken(response.token);
      this.router.navigate(['/protected']);  // Redirige al componente protected
    } catch (error) {
      alert('Login failed');
    }
  }
}
