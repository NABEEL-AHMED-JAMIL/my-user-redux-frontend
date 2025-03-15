import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
} from '@angular/router';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private commomService: CommomService) {}

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.commomService.hasPermissionAccess(route.data['permission'])) {
            return true;
        }
        // authorised so return true
        this.router.navigate(['/404']);
        return false;
    }

}