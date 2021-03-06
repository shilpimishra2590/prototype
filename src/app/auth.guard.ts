import { Injectable } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const username = localStorage.getItem('username')
      if(username){
        return true;
      }else{
        this.router.navigate(['dasboard'])
      }
   
  }
  
}
