import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
OnSubmit() {
if(this.loginForm.valid)
  console.log("data",this.loginForm.value)
}

loginForm= new FormGroup({
  Email:new FormControl('',[Validators.required,Validators.email]),
  Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
})

}
