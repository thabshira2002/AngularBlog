import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css'
})
export class RegistrationForm {

onSubmit() {
if(this.userForm.valid)
  console.log("data",this.userForm.value)
}

userForm = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(3)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.minLength(6),]),
  confirmPassword: new FormControl('',[Validators.required]),
  phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10)]),
  gender: new FormControl('',[Validators.required,Validators.required]),
  courseName: new FormControl('',[Validators.required]),

})

}
