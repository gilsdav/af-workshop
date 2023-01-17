import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AccessService } from '../services';

@Injectable()
export class ProductsGuard implements CanActivate {

    constructor(
        private accessService: AccessService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const canAccess = this.accessService.canAccess;
        if (!canAccess) {
            this.router.navigate(['/products']);
        }
        return canAccess;
    }
}
