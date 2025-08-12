import { Router } from '@angular/router';
import { routes } from './../../../../projects/task/src/app/app.routes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private routes:Router) {}
  
  login(){
    localStorage.setItem('user', 'loggedIn');
    this.routes.navigate(['logout']);
   
  }

  logout(){
    localStorage.removeItem('user');
    this.routes.navigate(['login']);
  }

}
