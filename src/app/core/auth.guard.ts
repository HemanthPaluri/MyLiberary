import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // console.log(this.authService.authenticated);
      if (this.authService.authenticated) {
        // this.router.navigateByUrl('/dashboard');
        return true;
      }else {
        console.log('access denied');
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
