import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cs:CourseService,private route:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.cs.isloggedin()){
      return true;
    }else{
      console.log('navigating to login')
      this.route.navigate(['login']);
      return false;
    }


      
  }
  
}
