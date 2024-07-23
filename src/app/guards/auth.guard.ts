import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    if (route.routeConfig?.path === 'login') {
      router.navigate(['/protected']);  // Redirige a 'protected' si el usuario ya está logeado e intenta acceder a 'login'
      return false;
    }
    return true;
  } else {
    if (route.routeConfig?.path === 'protected') {
      router.navigate(['/login']);  // Redirige a 'login' si el usuario no está logeado e intenta acceder a 'protected'
      return false;
    }
    return true;
  }
};
