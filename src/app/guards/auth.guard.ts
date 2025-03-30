import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();
  console.log('AuthGuard: Estado de autenticación →', isAuthenticated); // 🛠 Depuración

  if (isAuthenticated) {
    if (state.url === '/auth/inicio') {
      console.log('AuthGuard: Usuario ya autenticado, redirigiendo a /IDControl/inicio');
      router.navigate(['/IDControl/inicio']);
      return false; // Bloquea acceso a la página de login si ya está autenticado
    }
    return true; // Permite acceso a rutas protegidas
  }

  console.log('AuthGuard: Usuario no autenticado, redirigiendo a /auth/ingresar');
  router.navigate(['/auth/ingresar']);
  return false; // Bloquea acceso a rutas protegidas si no está autenticado
};
