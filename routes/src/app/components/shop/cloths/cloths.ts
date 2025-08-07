import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cloths',
  imports: [RouterOutlet],
  templateUrl: './cloths.html',
  styleUrl: './cloths.css'
})
export class Cloths {

constructor(private menRoute: Router) {}
// toWomen() {
//     this.menRout
// }



Tomen() {
this.menRoute.navigate(['men','women']);
}

}
