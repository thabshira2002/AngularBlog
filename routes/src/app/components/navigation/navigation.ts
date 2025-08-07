import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  constructor(private route: Router) {}

//   // Method to handle navigation action
navigatingTo() {
    this.route.navigate(['home']);
  }


}
