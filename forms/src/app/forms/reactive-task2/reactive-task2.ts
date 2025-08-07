import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-task2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-task2.html',
  styleUrl: './reactive-task2.css'
})
export class ReactiveTask2 {
  
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
