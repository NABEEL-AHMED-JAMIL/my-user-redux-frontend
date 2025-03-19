import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private authenticationService: AuthenticationService) {}

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.hasRoleAccess(route.data['roles'])) {
            return true;
        }
        // authorised so return true
        this.router.navigate(['/auth/login']);
        return false;
    }

    private hasRoleAccess(routeRoles: any) {
        let currentUser = this.authenticationService.currentUserValue
        return routeRoles.includes(currentUser.role);
    }

}