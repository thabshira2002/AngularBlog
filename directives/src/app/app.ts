import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Structural } from './components/structural/structural';
import { Attribute } from "./components/attribute/attribute";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Structural, Attribute],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
