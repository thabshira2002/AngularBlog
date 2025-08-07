import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form1',
  imports: [FormsModule,CommonModule],
  templateUrl: './temp-form1.html',
  styleUrl: './temp-form1.css'
})
export class TempForm1 {

submitted=false;

onSubmit(form:NgForm) {
this.submitted=true;
if(form.valid){
console.log("data",this.TempForm1);
}
}

  TempForm1 = {
    Name:'',
    Email:'',
    phone_Number:'',
    Message:'',

  }
}
