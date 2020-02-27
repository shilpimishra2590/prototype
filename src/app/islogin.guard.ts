import { Injectable } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloginGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const username = localStorage.getItem('username');
   if(username){
     this.router.navigate(['dasboard'])
   }else{
    return true;
   }
      
  }
  
}
