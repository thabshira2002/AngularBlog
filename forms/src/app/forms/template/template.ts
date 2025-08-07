import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthDirective } from '../password-strength';

@Component({
  selector: 'app-template',
  imports: [FormsModule,CommonModule,PasswordStrengthDirective],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
onSubmit(tempform:any) {
  console.log(tempform);
  
}

  formTemplate = {
    name:'',
    email: '',
    password: '',

  }
}
