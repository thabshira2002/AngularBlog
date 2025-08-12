import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(private auth: Auth){}

logout() {
 this.auth.logout();
}


}
