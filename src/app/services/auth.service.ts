import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): boolean {
    if (username === 'mcode' && password === '12345') {
      sessionStorage.setItem('authToken', 'valid-token'); // Simula un token
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('authToken'); // Verifica si hay un token en SessionStorage
  }

  logout(): void {
    sessionStorage.removeItem('authToken'); // Elimina el token
  }

}
