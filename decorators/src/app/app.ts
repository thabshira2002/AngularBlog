import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from "./components/parent/parent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'decorators';
}
