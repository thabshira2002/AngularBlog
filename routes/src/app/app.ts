import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./components/navigation/navigation";
import { Child1 } from "./components/parent/child1/child1";
import { Home } from "./component/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Child1, Home, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'routes';
}
