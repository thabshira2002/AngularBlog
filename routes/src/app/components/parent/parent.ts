import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  constructor(private router: Router,private route:ActivatedRoute) {}

//   // Method to handle navigation action
toChild1() {
    this.router.navigate(['child1'], { relativeTo: this.route });
  }
}
