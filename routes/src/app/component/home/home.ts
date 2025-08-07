import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private route: Router) {}

//   // Method to handle navigation action
parentTo() {
    this.route.navigate(['parent']);
  }
}
