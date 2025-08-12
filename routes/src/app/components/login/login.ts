import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private auth: Auth) {}
login() {
    this.auth.login();
    
  }

}
