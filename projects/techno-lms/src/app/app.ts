import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationForm } from "./components/registration-form/registration-form";
import { Login } from "./components/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistrationForm, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'techno-lms';
}
