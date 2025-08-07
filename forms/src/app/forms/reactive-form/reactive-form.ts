import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

userform = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(3)] ),
  email: new FormControl('',[Validators.required,Validators.email] ),
  number: new FormControl('',[Validators.required,Validators.minLength(10)] ),

});
  onsubmit() {
    if(this.userform.valid){
      console.log("data",this.userform.value)
    }
  }
}


