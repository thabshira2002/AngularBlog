import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

    users = [
    { id: 1, name: 'Thabshira' },
    { id: 2, name: 'Arjun' },
    { id: 3, name: 'Nisha' }
  ];

}
@NgModule({
  imports: [RouterModule],
})
export class AppRoutingModule {}