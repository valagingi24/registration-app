import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { RegistrationServiceService } from "./registration-page/registration-service.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: RegistrationServiceService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.authService.getAuthStatus();
        if (!isAuthenticated) {
            this.router.navigate(['']);
        }
        return isAuthenticated;
    }
}