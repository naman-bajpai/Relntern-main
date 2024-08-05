import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const expectedRoles = next.data['expectedRole'];
    const currentRole = this.authService.getRole();

    if (!this.authService.isAuthenticated() || !expectedRoles.includes(currentRole)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}