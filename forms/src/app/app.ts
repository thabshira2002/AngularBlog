import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template } from "./forms/template/template";
import { TempForm1 } from "./forms/temp-form1/temp-form1";
import { FormTask2 } from "./forms/form-task2/form-task2";
import { ReactiveForm } from "./forms/reactive-form/reactive-form";
import { ReactiveTask2 } from "./forms/reactive-task2/reactive-task2";
import { Login } from "./forms/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Template, TempForm1, FormTask2, ReactiveForm, ReactiveTask2, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'forms';
}
