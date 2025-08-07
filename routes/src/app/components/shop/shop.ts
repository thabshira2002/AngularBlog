import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [RouterOutlet],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  constructor(private router: Router, private route:ActivatedRoute) {}

shopTo() {
this.router.navigate(['cloths'], {relativeTo: this.route});
}

}
