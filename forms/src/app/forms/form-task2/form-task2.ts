import { Form } from './../../../../../decorators/src/app/services/form';
import { FormsModule, NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-task2',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-task2.html',
  styleUrl: './form-task2.css'
})
export class FormTask2 {
submitted: any;


onSubmit(form: NgForm) {
  if (form.valid){
    console.log("data",this.formList)  };
    this.submitted=true;
    
    form.reset();
    
};

ratings = [1,2,3,4,5];

formList = {
  Name:'',
  Email:'',
  Message:'',
  Rating:'',
  Age:'',
  Country:'',
};


}
