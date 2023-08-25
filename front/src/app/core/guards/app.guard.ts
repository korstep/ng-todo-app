import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    this.authService.isUserLogged$().subscribe((isLogged) => {
      if (!isLogged) {
        this.router.navigate(['']);
      }
    });
    return true;
  }
}
