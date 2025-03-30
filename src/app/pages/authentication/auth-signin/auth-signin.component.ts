import { Component } from '@angular/core';
import { AuthenticationModule } from '../authentication.module';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [AuthenticationModule],
  templateUrl: './auth-signin.component.html',
  styleUrl: './auth-signin.component.scss',
  standalone: true
})
export class AuthSigninComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      this.router.navigate(['/IDControl/inicio']); // 🔥 Redirige al usuario tras logearse
    } else {
      this.errorMessage = 'Credenciales Incorrectas. Inténtalo de nuevo.';
    }
  }
}
