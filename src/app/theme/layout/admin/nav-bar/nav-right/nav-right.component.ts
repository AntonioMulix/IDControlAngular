// angular import
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent {
  // public props

  // constructor
  constructor(private router: Router) {
    const config = inject(NgbDropdownConfig);

    config.placement = 'bottom-right';
  }

  logout(): void {
    this.router.navigate(['/auth/ingresar']);
    sessionStorage.removeItem('authToken'); // Elimina el token de sesión
    console.log('AuthService: Sesión cerrada'); // 🛠 Para depuración
  }

}
