import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template } from "./forms/template/template";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Template],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'forms';
}
