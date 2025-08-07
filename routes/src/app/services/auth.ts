import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  login(){
    console.log('login');
  }

  logout(){
    console.log('logout');
  }

}
