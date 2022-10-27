import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({
    providedIn:'root'
})

export class ConnexionGuard {
    constructor(private router:Router, private tokenservice:TokenService){}

    canActivate(
        route:ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
        let test = this.tokenservice.isLogged()
        if(test){
            return this.router.navigate(['/home'])
        }
        return this.router.navigate(['/login'])
    }
}